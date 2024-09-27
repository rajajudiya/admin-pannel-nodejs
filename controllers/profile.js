const userdata = async (req, res) => {
    const fname = await req.cookies.fname;
    const email = await req.cookies.email;
    const username = await req.cookies.user;
    const path = await req.cookies.path;

    res.render('profile', { fname, email, username, path });
}

module.exports = { userdata };