const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
//const bcryptjs = require("bcryptjs");
//const session = require("express-session");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/node-demo", { useNewUrlParser: true, useUnifiedTopology: true });

//listening on terminal
app.listen(4000, () => {
    console.log("listening on 4000");
})

app.get('/home', (req, res) => {
    res.render('home')
})