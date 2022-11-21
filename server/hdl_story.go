package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	"github.com/tinode/chat/server/logs"
	"github.com/tinode/chat/server/store"
	"github.com/tinode/chat/server/store/types"
)

type Story struct {
	Id        uint       `json:"id" gorm:"primaryKey"`
	Name      string     `json:"name,omitempty"`
	UserId    uint       `json:"user_id,omitempty"`
	Story     string     `json:"story,omitempty"`
	CreatedAt time.Time  `json:"created_at,omitempty"`
	UpdatedAt time.Time  `json:"updated_at,omitempty"`
	DeletedAt *time.Time `json:"deleted_at,omitempty" gorm:"index"`
}

func addStory(wrt http.ResponseWriter, req *http.Request) {
	now := types.TimeNow()
	enc := json.NewEncoder(wrt)
	statsInc("FileUploadsTotal", 1)

	writeHttpResponse := func(msg *ServerComMessage, err error) {
		// Gorilla CompressHandler requires Content-Type to be set.
		wrt.Header().Set("Content-Type", "application/json; charset=utf-8")
		wrt.WriteHeader(msg.Ctrl.Code)
		enc.Encode(msg)

		logs.Info.Println("media upload:", msg.Ctrl.Code, msg.Ctrl.Text, "/", err)
	}

	// Check for API key presence
	if isValid, _ := checkAPIKey(getAPIKey(req)); !isValid {
		writeHttpResponse(ErrAPIKeyRequired(now), nil)
		return
	}

	msgID := req.FormValue("id")
	// Check authorization: either auth information or SID must be present
	uid, challenge, err := authHttpRequest(req)
	if err != nil {
		writeHttpResponse(decodeStoreError(err, msgID, "", now, nil), err)
		return
	}
	if challenge != nil {
		writeHttpResponse(InfoChallenge(msgID, now, challenge), nil)
		return
	}
	if uid.IsZero() {
		// Not authenticated
		writeHttpResponse(ErrAuthRequired(msgID, "", now, now), nil)
		return
	}

	// Check if this is a POST/PUT/OPTIONS/HEAD request.
	if req.Method != http.MethodPost {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}

	defer req.Body.Close()
	var story Story
	bd, _ := ioutil.ReadAll(req.Body)
	json.Unmarshal(bd, &story)
	story.UserId = uint(store.DecodeUid(uid))

	err = DB.Model(&story).Create(&story).Error
	if err != nil {
		log.Println("unable to create story")
		return
	}

	var x uint
	story.UserId = x

	enc.Encode(story)
}

func listStory(wrt http.ResponseWriter, req *http.Request) {
	now := types.TimeNow()
	enc := json.NewEncoder(wrt)
	statsInc("FileUploadsTotal", 1)

	writeHttpResponse := func(msg *ServerComMessage, err error) {
		// Gorilla CompressHandler requires Content-Type to be set.
		wrt.Header().Set("Content-Type", "application/json; charset=utf-8")
		wrt.WriteHeader(msg.Ctrl.Code)
		enc.Encode(msg)

		logs.Info.Println("media upload:", msg.Ctrl.Code, msg.Ctrl.Text, "/", err)
	}

	// Check for API key presence
	if isValid, _ := checkAPIKey(getAPIKey(req)); !isValid {
		writeHttpResponse(ErrAPIKeyRequired(now), nil)
		return
	}

	msgID := req.FormValue("id")
	// Check authorization: either auth information or SID must be present
	uid, challenge, err := authHttpRequest(req)
	if err != nil {
		writeHttpResponse(decodeStoreError(err, msgID, "", now, nil), err)
		return
	}
	if challenge != nil {
		writeHttpResponse(InfoChallenge(msgID, now, challenge), nil)
		return
	}
	if uid.IsZero() {
		// Not authenticated
		writeHttpResponse(ErrAuthRequired(msgID, "", now, now), nil)
		return
	}

	// Check if this is a POST/PUT/OPTIONS/HEAD request.
	if req.Method != http.MethodGet {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}

	query := req.URL.Query()
	perpage, _ := strconv.Atoi(query.Get("perpage"))
	page, _ := strconv.Atoi(query.Get("page"))

	if perpage == 0 {
		perpage = 10
	}

	if page == 0 {
		page = 1
	}
	defer req.Body.Close()
	var stories []Story

	err = DB.Model(&Story{}).Offset(page - 1).Limit(perpage).Find(&stories).Error
	if err != nil {
		log.Println("unable to fetch stories")
		return
	}

	enc.Encode(stories)
}

func getStory(wrt http.ResponseWriter, req *http.Request) {
	now := types.TimeNow()
	enc := json.NewEncoder(wrt)
	statsInc("FileUploadsTotal", 1)

	writeHttpResponse := func(msg *ServerComMessage, err error) {
		// Gorilla CompressHandler requires Content-Type to be set.
		wrt.Header().Set("Content-Type", "application/json; charset=utf-8")
		wrt.WriteHeader(msg.Ctrl.Code)
		enc.Encode(msg)

		logs.Info.Println("media upload:", msg.Ctrl.Code, msg.Ctrl.Text, "/", err)
	}

	// Check for API key presence
	if isValid, _ := checkAPIKey(getAPIKey(req)); !isValid {
		writeHttpResponse(ErrAPIKeyRequired(now), nil)
		return
	}

	msgID := req.FormValue("id")
	// Check authorization: either auth information or SID must be present
	uid, challenge, err := authHttpRequest(req)
	if err != nil {
		writeHttpResponse(decodeStoreError(err, msgID, "", now, nil), err)
		return
	}
	if challenge != nil {
		writeHttpResponse(InfoChallenge(msgID, now, challenge), nil)
		return
	}
	if uid.IsZero() {
		// Not authenticated
		writeHttpResponse(ErrAuthRequired(msgID, "", now, now), nil)
		return
	}

	// Check if this is a GET request.
	if req.Method != http.MethodGet {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}
	defer req.Body.Close()
	name := mux.Vars(req)["id"]
	id, _ := strconv.Atoi(name)

	var story = Story{
		Id: uint(id),
	}

	err = DB.Model(&story).Where(&story).First(&story).Error
	if err != nil {
		log.Println("unable to get story")
		return
	}

	enc.Encode(story)
}

func deleteStory(wrt http.ResponseWriter, req *http.Request) {
	now := types.TimeNow()
	enc := json.NewEncoder(wrt)
	statsInc("FileUploadsTotal", 1)

	writeHttpResponse := func(msg *ServerComMessage, err error) {
		// Gorilla CompressHandler requires Content-Type to be set.
		wrt.Header().Set("Content-Type", "application/json; charset=utf-8")
		wrt.WriteHeader(msg.Ctrl.Code)
		enc.Encode(msg)

		logs.Info.Println("media upload:", msg.Ctrl.Code, msg.Ctrl.Text, "/", err)
	}

	// Check for API key presence
	if isValid, _ := checkAPIKey(getAPIKey(req)); !isValid {
		writeHttpResponse(ErrAPIKeyRequired(now), nil)
		return
	}

	msgID := req.FormValue("id")
	// Check authorization: either auth information or SID must be present
	uid, challenge, err := authHttpRequest(req)
	if err != nil {
		writeHttpResponse(decodeStoreError(err, msgID, "", now, nil), err)
		return
	}
	if challenge != nil {
		writeHttpResponse(InfoChallenge(msgID, now, challenge), nil)
		return
	}
	if uid.IsZero() {
		// Not authenticated
		writeHttpResponse(ErrAuthRequired(msgID, "", now, now), nil)
		return
	}

	// Check if this is a GET request.
	if req.Method != http.MethodDelete {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}
	defer req.Body.Close()
	name := mux.Vars(req)["id"]
	id, _ := strconv.Atoi(name)

	var story = Story{
		Id: uint(id),
	}

	err = DB.Model(&story).Where(&story).First(&story).Error
	if err != nil {
		log.Println("unable to get story")
		// writeHttpResponse(decodeStoreError(store.GetDbError(err), msgID, "", now, nil), err)
		wrt.WriteHeader(404)
		enc.Encode(store.GetDbError(err))
		return
	}

	if story.UserId != uint(store.DecodeUid(uid)) {
		wrt.WriteHeader(401)
		enc.Encode("Unauthorized")
		return
	}

	err = DB.Model(&story).Where(&story).Unscoped().Delete(&story).Error
	if err != nil {
		wrt.WriteHeader(400)
		enc.Encode(store.GetDbError(err))
		return
	}

	enc.Encode("story deleted")
}
