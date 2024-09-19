const model = require('../models/usermodel');
const bcrypt = require('bcrypt');


const login = (req,res) => {
    res.render('login.ejs')
}

module.exports = {login}