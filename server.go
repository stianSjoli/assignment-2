package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/static"
)


func main() {
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./build", false)))
	r.Run(":9000")
}
