const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Validate Function---

const SignUp = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
    },
    password: {
        type:String,
        required:true
    }

})

//we are creating new collection
const Sign_ = new mongoose.model("Sign_Up",SignUp);

module.exports = Sign_;