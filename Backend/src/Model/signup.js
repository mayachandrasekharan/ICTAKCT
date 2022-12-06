const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var signupSchema = new Schema({
    name:{
        type:String,
        unique:true
    },
    username:{
        type:String
    },
    gender:{
        typr:String
    },
    dob:{
        type:Date
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    },
    confirm_password:{
        type:String
    }

   
});

var signupdata = mongoose.model('signup', signupSchema); 

module.exports = signupdata;