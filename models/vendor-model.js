// Requiring packages
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

mongoose.set('useCreateIndex', true);

// schema definition
const vendorSchema = new mongoose.Schema({
    description: { 
        type: String,
        required: 'Please add description'
    },
    address: { 
        type: String,
        required: 'Please add your address',
        
    },          
  
    booking:{
       type: String,
       required: 'Please Enter booking details'
    } 
});


//Creating an instance of the model
module.exports =  mongoose.model("Vendor", VendorSchema)