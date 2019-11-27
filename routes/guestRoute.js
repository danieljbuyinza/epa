// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../models/registration-model');


// gets and displays a guest page
router.get('/', (req, res) => {
    res.render('guest');
})

module.exports = router; 