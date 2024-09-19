const homecon = (req, res) => {
    res.cookie('cookie','raj')
    res.render('index.ejs')
}





module.exports = {homecon};