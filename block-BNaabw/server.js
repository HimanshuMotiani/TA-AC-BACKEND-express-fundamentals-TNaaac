var express = require("express");
var logger = require("morgan")
var cookieParser = require("cookie-parser");
var app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + "/public"))
app.use(logger("dev"))
app.use(cookieParser())

//route middleware
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/projects",(req,res)=>{
    res.sendFile(__dirname + "/projects.html")
})

//404 error
app.use((req,res,next)=>{
    res.send("404 not found")
})
//custom error client/server, only be called if we pass error in next("sdfsdfsf")
app.use((err,req,res,next)=>{
    res.send(err)
})
app.listen(4000,()=>{})