package main

import (
	"log"
	"strings"

	"github.com/tinode/chat/server/store/types"
)

func main() {

	text := "Mehari:Fitihamlak"
	uname, pss, err := parseSecret(text)
	if err != nil {
		log.Println(err.Error())
		return
	}

	log.Printf("the 1st is %s and the 2nd is %s", uname, pss)

}

func parseSecret(new string) (uname, password string, err error) {

	var secret = new
	splitAt := strings.Index(secret, ":")
	if splitAt < 0 {
		err = types.ErrMalformed
		return
	}

	uname = strings.ToLower(secret[:splitAt])
	password = secret[splitAt+1:]
	return
}
