var express = require("express");
var logger = require("./logger")
var jsonParser = require("./jsonParser");
var app = express();

app.use(logger)
app.use(jsonParser)
app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(4000,()=>{})