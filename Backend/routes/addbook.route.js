const express = require('express');
const router = express.Router();
const addbook = require('../controllers/addbook.controller');


// Thêm nhà xuất bản
router.post('/nxb', addbook.addNXB);

// Thêm sách
router.post('/sach', addbook.addSach);

module.exports = router;
