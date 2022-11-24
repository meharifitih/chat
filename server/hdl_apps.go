package main

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/gorilla/mux"
	"github.com/tinode/chat/server/logs"
	"github.com/tinode/chat/server/store/types"
	"gorm.io/datatypes"
)

type MiniApp struct {
	Id              uint           `json:"id" gorm:"primaryKey"`
	Dir             string         `json:"dir,omitempty"`
	Lang            string         `json:"lang,omitempty"`
	AppName         string         `json:"app_name,omitempty"`
	ShortName       string         `json:"short_name,omitempty"`
	Description     string         `json:"description,omitempty"`
	Icons           datatypes.JSON `json:"icons,omitempty"`
	VerName         string         `json:"ver_name,omitempty"`
	VerCode         int            `json:"ver_code,omitempty"`
	MiniPlatformVer string         `json:"mini_ver,omitempty"`
	Pages           datatypes.JSON `json:"pages,omitempty"`
	Widget          datatypes.JSON `json:"widget,omitempty"`
	ReqPermission   datatypes.JSON `json:"req_permission,omitempty"`
	CreatedAt       time.Time      `json:"created_at,omitempty"`
	UpdatedAt       time.Time      `json:"updated_at,omitempty"`
	DeletedAt       *time.Time     `json:"deleted_at,omitempty" gorm:"index"`
}

type MiniAppDto struct {
	Id              uint     `json:"id" gorm:"primaryKey"`
	Dir             string   `json:"dir,omitempty"`
	Lang            string   `json:"lang,omitempty"`
	AppName         string   `json:"app_name,omitempty"`
	ShortName       string   `json:"short_name,omitempty"`
	Description     string   `json:"description,omitempty"`
	Icons           []string `json:"icons,omitempty"`
	VerName         string   `json:"ver_name,omitempty"`
	VerCode         int      `json:"ver_code,omitempty"`
	MiniPlatformVer string   `json:"mini_ver,omitempty"`
	Pages           []string `json:"pages,omitempty"`
	Widget          []string `json:"widget,omitempty"`
	ReqPermission   []string `json:"req_permission,omitempty"`
}

type UpdateMiniAPp struct {
	VerName         string `json:"ver_name,omitempty"`
	VerCode         int    `json:"ver_code,omitempty"`
	MiniPlatformVer string `json:"mini_ver,omitempty"`
}

func (data MiniAppDto) Validate() error {
	return validation.ValidateStruct(
		&data,
		validation.Field(&data.AppName, validation.Required.Error("App Name is required")),
		validation.Field(&data.Icons, validation.Required.Error("Icons are required")),
		validation.Field(&data.VerName, validation.Required.Error("version name is required")),
		validation.Field(&data.VerCode, validation.Required.Error("version code is required")),
		validation.Field(&data.MiniPlatformVer, validation.Required.Error("min platform version  is required")),
		validation.Field(&data.Pages, validation.Required.Error("pages are required")))
}

func addMiniApp(wrt http.ResponseWriter, req *http.Request) {
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
	var dto MiniAppDto
	bd, err := ioutil.ReadAll(req.Body)
	if err != nil {
		logs.Info.Println("unable to read body:", 400, "/", err)
		wrt.WriteHeader(400)
		enc.Encode("unable to read body")
		return
	}

	json.Unmarshal(bd, &dto)

	err = dto.Validate()
	if err != nil {
		logs.Info.Println("unable to validate:", 400, "/", err)
		wrt.WriteHeader(400)
		enc.Encode(err)
		return
	}

	icons, err := json.Marshal(dto.Icons)
	if err != nil {
		wrt.WriteHeader(400)
		enc.Encode("unable to marshall icons")
		return
	}

	pages, err := json.Marshal(dto.Pages)
	if err != nil {
		wrt.WriteHeader(400)
		enc.Encode("unable to marshall pages")
		return
	}

	widgets, err := json.Marshal(dto.Widget)
	if err != nil {
		wrt.WriteHeader(400)
		enc.Encode("unable to marshall widgets")
		return
	}

	permission, err := json.Marshal(dto.ReqPermission)
	if err != nil {
		wrt.WriteHeader(400)
		enc.Encode("unable to marshall permissions")
		return
	}

	miniApp := MiniApp{
		Dir:             dto.Dir,
		Lang:            dto.Lang,
		AppName:         dto.AppName,
		ShortName:       dto.ShortName,
		Description:     dto.Description,
		VerName:         dto.VerName,
		VerCode:         dto.VerCode,
		MiniPlatformVer: dto.MiniPlatformVer,
		Icons:           datatypes.JSON(icons),
		Pages:           datatypes.JSON(pages),
		Widget:          datatypes.JSON(widgets),
		ReqPermission:   datatypes.JSON(permission),
	}

	err = DB.Model(&miniApp).Create(&miniApp).Error
	if err != nil {
		logs.Info.Println("unable to create mini app:", 400, "/", err)
		wrt.WriteHeader(400)
		enc.Encode("unable to create mini app")
		return
	}

	enc.Encode(miniApp)
}

func getMiniApp(wrt http.ResponseWriter, req *http.Request) {
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

	name := mux.Vars(req)["name"]

	app := MiniApp{
		AppName: name,
	}

	err = DB.Model(&app).Where(&app).First(&app).Error
	if err != nil {
		logs.Info.Println("unable to get mini app:", 400, "/", err)
		wrt.WriteHeader(400)
		enc.Encode("unable to get mini app")
	}

	enc.Encode(app)
}

func deleteMiniApp(wrt http.ResponseWriter, req *http.Request) {
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

	name := mux.Vars(req)["name"]

	app := MiniApp{
		AppName: name,
	}

	log.Println("the value of app name is ", app.AppName)

	err = DB.Model(&app).Where("app_name=? ", app.AppName).Unscoped().Delete(&app).Error
	if err != nil {
		log.Println("unable to delete app")
		return
	}

	enc.Encode("app deleted")
}

func updateMiniApp(wrt http.ResponseWriter, req *http.Request) {
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

	var dto UpdateMiniAPp
	bd, err := ioutil.ReadAll(req.Body)
	if err != nil {
		logs.Info.Println("unable to read body:", 400, "/", err)
		wrt.WriteHeader(400)
		enc.Encode("unable to read body")
		return
	}

	json.Unmarshal(bd, &dto)

	name := mux.Vars(req)["name"]

	miniApp := MiniApp{
		AppName:         name,
		VerCode:         dto.VerCode,
		VerName:         dto.VerName,
		MiniPlatformVer: dto.MiniPlatformVer,
	}

	err = DB.Model(&miniApp).Where("app_name=? ", miniApp.AppName).Updates(&miniApp).Error
	if err != nil {
		logs.Info.Println("unable to update mini app:", 400, "/", err)
		wrt.WriteHeader(400)
		enc.Encode("unable to update mini app")
		return
	}

	enc.Encode(miniApp)
}
