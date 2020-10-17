package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/static"
	"os"
)


func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./build", false)))
	r.Run(":" + port)
}
