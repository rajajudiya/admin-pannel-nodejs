const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    fname : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true
    },
    password : {
        type:String,
        required: true
    },
})

module.exports = mongoose.model('user',userschema);