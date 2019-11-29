// Requiring needed packages
const express = require("express")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// passport config
// const Account = require('./models/registration-model');
// passport.use(new LocalStrategy(Account.authenticate()));
// passport.serializeUser(Account.serializeUser());
// passport.deserializeUser(Account.deserializeUser());

app.use(session({
    secret: "thesecret",
    resave: true,
    saveUninitialized: false
}))

mongoose.connect("mongodb://localhost:27017/epa", { useNewUrlParser: true, useUnifiedTopology: true });


const registrationRoutes = require("./routes/registration-routes");
app.use("/register", registrationRoutes);

const loginRoutes = require("./routes/login-routes");
app.use("/login", loginRoutes);

const vendorsRoutes = require("./routes/vendors-routes");
app.use("/vendors", vendorsRoutes);

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

const vendorProfileRoute = require('./routes/vendor-profileRoute')
app.use('/vendor-profile', vendorProfileRoute);

const logoutRoute = require('./routes/logoutRoute')
app.use('/logout', logoutRoute);

// Mongoose db connection
mongoose.connect("mongodb://localhost:27017/epa", { useNewUrlParser: true, useUnifiedTopology: true });



