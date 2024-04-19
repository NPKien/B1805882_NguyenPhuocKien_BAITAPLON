const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

//Tìm sách
router.get('/search', bookController.searchBookByName);

// Xem tất cả sách
router.get('/', bookController.getAllBooks);

// Xem một sách cụ thể
router.get('/:id', bookController.getBookById);

// Sửa thông tin sách
router.patch('/:id', bookController.updateBook);

// Xóa sách
router.delete('/:id', bookController.deleteBook);



module.exports = router;
