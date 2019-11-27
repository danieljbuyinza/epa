// Requiring needed packages
const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const passport = require("passport");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://localhost:27017/epa", { useNewUrlParser: true, useUnifiedTopology: true });


// route
// app.get('/', (req, res)=> {
//     res.render('test')
// });
const registrationRoutes = require("./routes/registration-routes");
app.use("/register", registrationRoutes);

app.get("/login", (req, res) => {
    res.render("login");
})


//  Listening for requests: the server
app.listen(5000, ()=>{
    console.log("listening on 5000");
})

// Importing routes
const loginRoute = require('./routes/loginRoute')
app.use('/login', loginRoute);

const registrationRoute = require('./routes/registration-routes')
app.use('/register', registrationRoute);

const homeRoute = require('./routes/homeRoute')
app.use('/home', homeRoute);

const guestRoute = require('./routes/guestRoute')
app.use('/guest', guestRoute);

const plannerRoute = require('./routes/plannerRoute')
app.use('/planner', plannerRoute);

const vendorRoute = require('./routes/vendorRoute')
app.use('/vendor', vendorRoute);


