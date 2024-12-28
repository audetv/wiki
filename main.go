package main

import (
	"log"
	"net/http"
	"os"
	"time"
)

func main() {
	if tz := os.Getenv("TZ"); tz != "" {
		var err error
		time.Local, err = time.LoadLocation(tz)
		if err != nil {
			log.Printf("error loading location '%s': %v\n", tz, err)
		}
	}
	// output current time zone
	tnow := time.Now()
	tz, _ := tnow.Zone()
	log.Printf("Local time zone %s. Service started at %s", tz, tnow.Format("2006-01-02T15:04:05.000 MST"))

	// ctx, cancel := signal.NotifyContext(context.Background(), os.Interrupt)

	http.Handle("/", http.FileServer(http.Dir("./-")))
	http.ListenAndServe(":8080", nil)
}
