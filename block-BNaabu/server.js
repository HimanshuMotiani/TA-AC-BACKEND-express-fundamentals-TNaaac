var express = require("express");
var app = express()
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use("/admin",(req,res,next)=>{
res.send("unauthorised")
})
app.get("/about",(req,res)=>{
    res.send("Bye")
})
app.use((req,res,next)=>{
    res.send("404 Page not found")
})
app.use((err,req,res,next)=>{
    res.send(err);
})
app.listen(5000,()=>{})