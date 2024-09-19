const express = require('express');
const router = express.Router();
const con = require('../controllers/controller');
const reg = require('../controllers/register');
const log = require('../controllers/login');


router.get('/', con.homecon);

router.get('/register',reg.register);
router.post('/register',reg.registerdata)

router.get('/login', log.login);
// router.post('/login',log.)

module.exports = router;