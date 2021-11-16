var express = require("express")
var app = express();

app.get("/",(req,res)=>{
    console.log(req.method,req.url);
})
app.get("/json",(req,res)=>{
    JSON.parse(req.body)
    console.log(req.method,req.url);
})


app.listen(4000,()=>{})