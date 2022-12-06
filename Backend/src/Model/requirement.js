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
    institution:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    no_of_hours:{
        type:Number,
        required:true
    },
    reference:{
        type:String,
        required:true
       
    },
    comments:{
        type:String,
        
    },
    file: {
        type:String,
       
      
    }

})


let RequireData = mongoose.model('requirements', RequireSchema)

module.exports = RequireData