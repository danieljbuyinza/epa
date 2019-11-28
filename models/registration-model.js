const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

// schema definition
const registrationSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: "Please enter first name"
    },
    lastName: String,
    username: {
        type: String,
        unique: true,
        required: "Please enter username"
    },
    emailAddress: {
        type: String,
        unique: true,
        required: "Please enter your email address"
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: "Please enter phone number"
    },
    category: String,
    password: {
        type: String,
        required: "Please enter password"
    },
});

registrationSchema.pre("save", function(next) {
    this.password = bcryptjs.hashSync(this.password, 10);
    next();
})

// authenticate input against database
registrationSchema.statics.authenticate = async function(username, password) {
    const user = await this.findOne({ username: username })
    if (!user) {
        throw new Error('User not found.');
    }
    const match = await bcryptjs.compare(password, user.password)
    if (match) {
        return user;
    }
}

module.exports = mongoose.model("EPA-user", registrationSchema);