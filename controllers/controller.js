const homecon = (req, res) => {
    res.cookie('cookie','raj')
    res.render('index.ejs')
}

const login = (req, res) => {
    res.render('login.ejs')
}



module.exports = {homecon,login};