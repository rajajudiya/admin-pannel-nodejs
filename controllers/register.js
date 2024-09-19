const usermodel = require('../models/usermodel');
const model = require('../models/usermodel');
const bcrypt = require('bcrypt');
const saltround = 10;

const register = (req,res) => {
    res.render('register-form.ejs')
}

const registerdata = async (req, res) => {
    console.log(req.body);
    
    if (req.body.password == req.body.con_password) {
        
        bcrypt.hash(req.body.password, saltround, async(err,hash) => {
            const user = new usermodel({
                fname: req.body.fname,
                email: req.body.email,
                password: hash
            })
            console.log(user);
            
            const users = await user.save();

            res.cookie('user',users);

            console.log(users);

            res.redirect('/login');
        })
    } else {
       res.redirect('/register');
    }
}


module.exports ={register,registerdata}