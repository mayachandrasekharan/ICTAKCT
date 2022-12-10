const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var signupSchema = new Schema({
    name:{
        type:String,
        // unique:true
    },
    email:{
        type:String
    },
    phonenumber:{
        type:Number
    },
    password:{
        type:String
    }
   
});

var signupdata = mongoose.model('signup', signupSchema); 

module.exports = signupdata;