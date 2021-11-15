var express = require("express");
var app = express();

app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();
})
app.get("/",(req,res)=>{
    res.send("welcome hero");
})

app.listen(3000,()=>{})