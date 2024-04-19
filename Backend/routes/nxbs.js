const express = require('express');
const router = express.Router();
const nxbController = require('../controllers/nxb.controller');

//Tìm sách
router.get('/search', nxbController.searchnxbByName);

// Xem tất cả sách
router.get('/', nxbController.getAllNxb);

// Xem một sách cụ thể
router.get('/:id', nxbController.getnxbId);

// Sửa thông tin sách
router.patch('/:id', nxbController.updatenxb);

// Xóa sách
router.delete('/:id', nxbController.deletenxb);



module.exports = router;
