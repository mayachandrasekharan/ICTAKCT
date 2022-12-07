const mongoose = require('mongoose')
const Schema = mongoose.Schema

const responseSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required:true
    },
    ic:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    hour:{
        type: Number,
        required:true
    },
    ref:{
        type: String
    },
    comment:{
        type: String
    },
    resfile:{
        type: String
    }

}, {timestamps: true});

let ResponseDATA = mongoose.model('responsedetail', responseSchema)

module.exports = ResponseDATA