const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("vendors")
})

// router.post("/", async (req, res) => {
//     const register = new Register(req.body);
//     try {
//         const registered = await register.save();
//         Register.find().then(
//             res.redirect("/login")
//         )
//     } catch (err) {
//         res.status(500).send("unable to save to database");
//         res.json({ message: err });
//     }
// })


module.exports = router;