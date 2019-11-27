// Requiring needed packages
const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcryptjs = require("bcryptjs");
const session = require("express-session");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/node-demo", { useNewUrlParser: true, useUnifiedTopology: true });


// route
app.get('/', (req, res)=> {
    res.render('test')
});
app.get("/register", (req, res) => {
    res.render("register");
})
app.get("/login", (req, res) => {
    res.render("login");
})


//  Listening for requests: the server
app.listen(5000, ()=>{
    console.log("listening on 5000");
})


app.get('/home', (req, res) => {
    res.render('home')
})
app.get("/login", (req, res) => {
    res.render("login");
})
app.get("/register", (req, res) => {
    res.render("register");
})
app.get("/guest", (req, res) => {
    res.render("guest");
})
