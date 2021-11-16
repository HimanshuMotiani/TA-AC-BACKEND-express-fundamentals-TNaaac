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
    res.send("Hello")
})
app.get("/about",(req,res)=>{
    res.send("about")
})
app.use((req,res,next)=>{
    res.send("404 not found")
})
app.listen(4000,()=>{})