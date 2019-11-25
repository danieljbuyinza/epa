const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcryptjs = require("bcryptjs");
const session = require("express-session");

const server = express();
server.set("view engine", "pug");
server.set("views", path.join(__dirname, "views"))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static("static-files"));

server.get("/register", (req, res) => {
    res.render("register");
})

server.listen(4000, () => {
    console.log("Server listening on port 4000");
})