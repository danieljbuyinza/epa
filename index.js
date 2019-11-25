const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");

const server = express();
server.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }))