// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../models/registration-model');


// gets and displays a planner page
router.get('/', (req, res) => {
    res.render('planner');
})

module.exports = router; 