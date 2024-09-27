const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');


const login = (req, res) => {
    res.render('login')
}

const logindata = async (req, res) => {
    console.log(req.body);

    const usersData = await usermodel.find({ email: req.body.email });
    console.log("usersData", usersData);

    if (usersData.length > 0) {

        bcrypt.compare(req.body.password, usersData[0].password, (err, result) => {

            if (!err) {
                res.cookie("userId", usersData[0]._id.toString())
                res.redirect('/');
            } else {
                res.redirect('/login');
            }

        });

    } else {
        res.redirect("register")
    }
}
module.exports = { login, logindata }