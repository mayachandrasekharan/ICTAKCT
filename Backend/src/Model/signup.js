const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var signupSchema = new Schema({
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    confirmPassword:{
        type:String
    }

   
});

var signupdata = mongoose.model('signup', signupSchema); 

module.exports = signupdata;