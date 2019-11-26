const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcryptjs = require("bcryptjs");
const session = require("express-session");

//2.Create a handler to store all the express features
let server = express();

//console.log(__filename)// while __filename brings up to the file on which your working on.
//console.log(__dirname);// this gives the directory of the folder project

//specify where the engine is to pick views
//compile them to HTML and then render them
//or serve them to the client application
let joinedpath = path.join(__dirname, "views");
server.set("view engine", "pug");
server.set("views",joinedpath); 

//setting middleware
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}))

//3.Configure the server to be able to listen for requests
server.listen(4000,()=>{
    console.log("listening on port 4000")
})
