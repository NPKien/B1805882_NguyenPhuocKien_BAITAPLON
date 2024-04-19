const express = require('express');
const router = express.Router();
const Login =  require('../controllers/login.controller')

router.post('/login', Login.login);


module.exports = router;