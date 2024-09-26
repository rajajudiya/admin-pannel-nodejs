const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const usermodel = mongoose.model('user', userschema);

module.exports = usermodel;