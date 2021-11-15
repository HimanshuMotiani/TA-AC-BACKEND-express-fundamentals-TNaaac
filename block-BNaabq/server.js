const cookieParser = require("cookie-parser");
var logger = require("morgan")
var express = require("express")
var app = express();

app.use(logger('dev'))
app.use(cookieParser())
app.use("/about",(req,res,next)=>{
    console.log(req.cookies);
    res.cookie("username", "himanshu")
    res.send("Welcome himanshu")
    next()
})

app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(5000,()=>{
})