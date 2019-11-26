// Requiring needed packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcryptjs = require("bcryptjs");
const session = require("express-session");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }))
// setting the static folder
app.use(express.static(path.join(__dirname, 'public')));


// route
app.get('/guest', (req, res)=> {
    res.render('guest')
});
app.get("/register", (req, res) => {
    res.render("register");
})

//  Listening for requests: the server
app.listen(5000, ()=>{
    console.log("listening on 5000");
})



