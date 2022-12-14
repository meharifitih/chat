package fcm

import (
	"errors"
	"strconv"
	"time"

	fcm "firebase.google.com/go/messaging"

	"github.com/tinode/chat/server/drafty"
	"github.com/tinode/chat/server/logs"
	"github.com/tinode/chat/server/push"
	"github.com/tinode/chat/server/store"
	t "github.com/tinode/chat/server/store/types"
)

// MessageData adds user ID and device token to push message. This is needed for error handling.
type MessageData struct {
	Uid t.Uid
	// FCM device token.
	DeviceId string
	Message  *fcm.Message
}

func payloadToData(pl *push.Payload) (map[string]string, error) {
	if pl == nil {
		return nil, errors.New("empty push payload")
	}
	data := make(map[string]string)
	var err error
	data["what"] = pl.What
	if pl.Silent {
		data["silent"] = "true"
	}
	data["topic"] = pl.Topic
	data["ts"] = pl.Timestamp.Format(time.RFC3339Nano)
	// Must use "xfrom" because "from" is a reserved word. Google did not bother to document it anywhere.
	data["xfrom"] = pl.From
	if pl.What == push.ActMsg {
		data["seq"] = strconv.Itoa(pl.SeqId)
		data["mime"] = pl.ContentType

		// Convert Drafty content to plain text (clients 0.16 and below).
		data["content"], err = drafty.PlainText(pl.Content)
		if err != nil {
			return nil, err
		}
		// Trim long strings to 128 runes.
		// Check byte length first and don't waste time converting short strings.
		if len(data["content"]) > push.MaxPayloadLength {
			runes := []rune(data["content"])
			if len(runes) > push.MaxPayloadLength {
				data["content"] = string(runes[:push.MaxPayloadLength]) + "…"
			}
		}

		// Rich content for clients version 0.17 and above.
		data["rc"], err = drafty.Preview(pl.Content, push.MaxPayloadLength)

		if pl.Webrtc != "" {
			data["webrtc"] = pl.Webrtc
			// Video call push notifications are silent.
			data["silent"] = "true"
		}
		if pl.Replace != "" {
			data["replace"] = pl.Replace
		}
		if err != nil {
			return nil, err
		}
	} else if pl.What == push.ActSub {
		data["modeWant"] = pl.ModeWant.String()
		data["modeGiven"] = pl.ModeGiven.String()
	} else if pl.What == push.ActRead {
		data["seq"] = strconv.Itoa(pl.SeqId)
		data["silent"] = "true"
	} else {
		return nil, errors.New("unknown push type")
	}
	return data, nil
}

func clonePayload(src map[string]string) map[string]string {
	dst := make(map[string]string, len(src))
	for key, val := range src {
		dst[key] = val
	}
	return dst
}

// PrepareNotifications creates notification payloads ready to be posted
// to push notification server for the provided receipt.
func PrepareNotifications(rcpt *push.Receipt, config *CommonNotifConfig) []MessageData {
	data, err := payloadToData(&rcpt.Payload)
	if err != nil {
		logs.Warn.Println("fcm push: could not parse payload;", err)
		return nil
	}

	// Device IDs to send pushes to.
	var devices map[t.Uid][]t.DeviceDef
	// Count of device IDs to push to.
	var count int
	// Devices which were online in the topic when the message was sent.
	skipDevices := make(map[string]struct{})
	if len(rcpt.To) > 0 {
		// List of UIDs for querying the database

		uids := make([]t.Uid, len(rcpt.To))
		i := 0
		for uid, to := range rcpt.To {
			uids[i] = uid
			i++
			// Some devices were online and received the message. Skip them.
			for _, deviceID := range to.Devices {
				skipDevices[deviceID] = struct{}{}
			}
		}
		devices, count, err = store.Devices.GetAll(uids...)
		if err != nil {
			logs.Warn.Println("fcm push: db error", err)
			return nil
		}
	}
	if count == 0 && rcpt.Channel == "" {
		return nil
	}

	values := prepareValues(config, rcpt.Payload.What, data)
	var priority string
	if rcpt.Payload.What == push.ActRead {
		priority = "normal"
	} else {
		priority = "high"
	}

	var messages []MessageData

	tcat := t.GetTopicCat(data["topic"])
	for uid, devList := range devices {
		userData := data
		if rcpt.To[uid].Delivered > 0 || tcat == t.TopicCatP2P {
			userData = clonePayload(data)
			// Fix topic name for P2P pushes.
			if tcat == t.TopicCatP2P {
				topic, _ := t.P2PNameForUser(uid, data["topic"])
				userData["topic"] = topic
			}
			// Silence the push for user who have received the data interactively.
			if rcpt.To[uid].Delivered > 0 {
				userData["silent"] = "true"
			}
		}
		for i := range devList {
			d := &devList[i]
			if _, ok := skipDevices[d.DeviceId]; !ok && d.DeviceId != "" {
				msg := fcm.Message{
					Token: d.DeviceId,
					Data:  userData,
				}

				if values != nil {
					msg.Notification = &fcm.Notification{
						Title: values.title,
						Body:  values.body,
					}
				}

				if d.Platform == "android" {
					assignAndroidNotification(&msg, values, rcpt.Payload.Topic, priority)
				} else if d.Platform == "ios" {
					assignAppleNotification(&msg, values, rcpt.Payload.Topic, priority, rcpt.To[uid].Unread)
				}
				messages = append(messages, MessageData{Uid: uid, DeviceId: d.DeviceId, Message: &msg})
			}
		}
	}

	if rcpt.Channel != "" && values != nil {
		userData := clonePayload(data)
		userData["topic"] = rcpt.Channel
		// Channel receiver should not know the ID of the message sender.
		delete(userData, "xfrom")
		msg := fcm.Message{
			Topic: rcpt.Channel,
			Data:  userData,
			Notification: &fcm.Notification{
				Title: values.title,
				Body:  values.body,
			},
		}

		// We don't know the platform of the receiver, must provide payload for all platforms.
		assignAndroidNotification(&msg, values, rcpt.Payload.Topic, "normal")
		assignAppleNotification(&msg, values, rcpt.Payload.Topic, "normal", -1)
		messages = append(messages, MessageData{Message: &msg})
	}

	return messages
}

// DevicesForUser loads device IDs of the given user.
func DevicesForUser(uid t.Uid) []string {
	ddef, count, err := store.Devices.GetAll(uid)
	if err != nil {
		logs.Warn.Println("fcm devices for user: db error", err)
		return nil
	}

	if count == 0 {
		return nil
	}

	devices := make([]string, count)
	for i, dd := range ddef[uid] {
		devices[i] = dd.DeviceId
	}
	return devices
}

// ChannelsForUser loads user's channel subscriptions with P permission.
func ChannelsForUser(uid t.Uid) []string {
	channels, err := store.Users.GetChannels(uid)
	if err != nil {
		logs.Warn.Println("fcm channels for user: db error", err)
		return nil
	}
	return channels
}
