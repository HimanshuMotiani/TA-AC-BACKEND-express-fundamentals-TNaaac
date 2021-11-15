var express = require("express")
var app = express();

app.use(express.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get("/new",(req,res)=>{
    console.log(res,req);
    res.sendFile(__dirname + "/new.html")
})
app.get("/users/:id",(req,res)=>{
    var id = req.params.id
    console.log(id);
    res.sendFile(__dirname + "/new.html")
})
app.post("/new",(req,res)=>{
    console.log(req.body);
    res.json(req.body);

})

app.listen(4000,()=>{
})