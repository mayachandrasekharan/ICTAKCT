const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var loginSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }
   
});

var logindata = mongoose.model('login', loginSchema); 

module.exports = logindata;