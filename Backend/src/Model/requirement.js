const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequireSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    ic:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    hour:{
        type:Number,
        required:true
    },
    ref:{
        type:String,
       
       
    },
    filePath: {
        type: String
    },
    comment:{
        type:String
        
    },
    resfile: {
        type:String  
    }

})


let RequireData = mongoose.model('requirements', RequireSchema)

module.exports = RequireData