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
	"github.com/tinode/chat/server/store/types"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Banner struct {
	Id         uint       `json:"id" gorm:"primaryKey"`
	BannerName string     `json:"banner_name" `
	LinkUrl    string     `json:"link_url"`
	Internal   bool       `json:"internal"`
	ImgUrl     string     `json:"img_url"`
	CreatedAt  time.Time  `json:"created_at,omitempty"`
	UpdatedAt  time.Time  `json:"updated_at,omitempty"`
	DeletedAt  *time.Time `json:"deleted_at,omitempty" gorm:"index"`
}

func addBanners(wrt http.ResponseWriter, req *http.Request) {
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

	db_url := "root:@tcp(localhost:3306)/tinode?parseTime=true"
	db, err := gorm.Open(mysql.Open(db_url), &gorm.Config{})
	if err != nil {
		log.Println("Unable to connect to db")
		return
	}
	db.AutoMigrate(&Banner{})

	// Check if this is a POST/PUT/OPTIONS/HEAD request.
	if req.Method != http.MethodPost {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}

	defer req.Body.Close()
	var banner Banner
	bd, _ := ioutil.ReadAll(req.Body)
	json.Unmarshal(bd, &banner)

	err = db.Model(&banner).Create(&banner).Error
	if err != nil {
		log.Println("unable to create banner")
		return
	}

	enc.Encode(banner)
}

func getBanner(wrt http.ResponseWriter, req *http.Request) {
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

	db_url := "root:@tcp(localhost:3306)/tinode?parseTime=true"
	db, err := gorm.Open(mysql.Open(db_url), &gorm.Config{})
	if err != nil {
		log.Println("Unable to connect to db")
		return
	}
	db.AutoMigrate(&Banner{})

	// Check if this is a GET request.
	if req.Method != http.MethodGet {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}
	defer req.Body.Close()
	name := mux.Vars(req)["name"]

	var banner = Banner{
		BannerName: name,
	}

	err = db.Model(&banner).Where(&banner).First(&banner).Error
	if err != nil {
		log.Println("unable to get banner")
		return
	}

	enc.Encode(banner)
}

func deleteBanner(wrt http.ResponseWriter, req *http.Request) {
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

	db_url := "root:@tcp(localhost:3306)/tinode?parseTime=true"
	db, err := gorm.Open(mysql.Open(db_url), &gorm.Config{})
	if err != nil {
		log.Println("Unable to connect to db")
		return
	}
	db.AutoMigrate(&Banner{})

	// Check if this is a GET request.
	if req.Method != http.MethodDelete {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}
	defer req.Body.Close()
	// query := req.URL.Query()
	// name := query.Get("name")

	name := mux.Vars(req)["name"]

	var banner = Banner{
		BannerName: name,
	}

	err = db.Model(&banner).Where(&banner).Unscoped().Delete(&banner).Error
	if err != nil {
		log.Println("unable to delete banner")
		return
	}

	enc.Encode("banner deleted")
}

func listBanners(wrt http.ResponseWriter, req *http.Request) {
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

	db_url := "root:@tcp(localhost:3306)/tinode?parseTime=true"
	db, err := gorm.Open(mysql.Open(db_url), &gorm.Config{})
	if err != nil {
		log.Println("Unable to connect to db")
		return
	}
	db.AutoMigrate(&Banner{})

	// Check if this is a GET request.
	if req.Method != http.MethodGet {
		writeHttpResponse(ErrOperationNotAllowed("", "", now), errors.New("method '"+req.Method+"' not allowed"))
		return
	}

	query := req.URL.Query()
	perpage, _ := strconv.Atoi(query.Get("perpage"))
	page, _ := strconv.Atoi(query.Get("page"))

	if perpage == 0 {
		perpage = 1
	}

	if page == 0 {
		page = 1
	}
	defer req.Body.Close()
	var banners []Banner

	err = db.Model(&Banner{}).Offset(page - 1).Limit(perpage).Find(&banners).Error
	if err != nil {
		log.Println("unable to fetch banners")
		return
	}

	enc.Encode(banners)
}
