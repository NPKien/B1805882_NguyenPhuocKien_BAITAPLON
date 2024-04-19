const express = require('express');
const router = express.Router();
const register = require('../controllers/register.controller');

// Đăng ký nhân viên
router.post('/nhanvien', register.registerNhanvien);

// Đăng ký độc giả
router.post('/docgia', register.registerDocgia);

module.exports = router;
