const model = require('../models/usermodel');
const bcrypt = require('bcrypt');


const login = (req,res) => {
    res.render('login.ejs')
}

const logindata = async (req, res) => {
    console.log(req.body);

    const users = await model.find({ email: req.body.email });
    console.log(users);
    
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!err) {
            res.redirect('/');
        } else {
            res.redirect('/register');
        }

    });
    
}
module.exports = {login,logindata}