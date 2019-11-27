// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../models/registration-model');


// gets and displays a login page
router.get('/', (req, res) => {
    res.render('login');
})



module.exports = router; 