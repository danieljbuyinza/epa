const express = require("express");
const router = express.Router();
const Register = require("../models/registration-model");

router.get("/", (req, res) => {
    res.render("login")
})

// submits a login page information
router.post("/", async(req, res) => {
    try{
        // const user = await Register.authenticate(req.body.username, req.body.password);
        // req.session.user = user;
        res.redirect("vendors");
    }catch{
        res.send("Login Failed");
    }
})

module.exports = router;