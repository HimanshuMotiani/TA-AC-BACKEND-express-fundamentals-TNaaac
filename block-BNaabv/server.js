var express = require("express")
var logger = require("morgan")
var cookieParser = require("cookie-parser")
var app = express();

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))



app.use("/admin", (req, res, next) => {
    next("Unauthorized");
})

app.get("/", (req, res) => {
    res.send(`<h2>Welcome to express<h2>`)
})

app.get("/about", (req, res) => {
    res.send(`<p>My name is qwerty<p>`)
})

app.post("/form", (req, res) => {
    res.json(req.body);
})

app.post("/json", (req, res) => {
    // res.setHeader("Content-type",'text/plain');
    res.send(req.body)
})

app.get("/users/:username", (req, res) => {
    var username = req.params.username
    res.send(username);
})

app.use((req, res, next) => {
    res.cookie("name", "himanshu")
    res.send("404 Page not found")
    next();
})

app.use((err, req, res, next) => {
    res.send(err);
})

app.listen(3000, () => { })