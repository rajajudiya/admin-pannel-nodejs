const express = require('express');
const router = express.Router();
const con = require('../controllers/controller');

router.get('/', con.homecon);
router.get('/login', con.login);


module.exports = router;