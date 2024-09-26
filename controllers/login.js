const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');


const login = (req, res) => {
    res.render('login.ejs')
}

const logindata = async (req, res) => {
    console.log(req.body);

    const users = await usermodel.find({ email: req.body.email });
    console.log("usersData", users);

    if (users.length > 0) {

        bcrypt.compare(req.body.password, users[0].password, (err, result) => {

            if (!err) {
                res.cookie("userId", users[0]._id.toString())
                res.redirect('/');
            } else {
                res.redirect('/register');
            }

        });
  
    } else {
        res.redirect("register")
    }
}
module.exports = { login, logindata }