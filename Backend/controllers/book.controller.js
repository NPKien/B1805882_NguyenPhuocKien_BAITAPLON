const {Sach} = require('../models/index');

// Xem tất cả sách
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Sach.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xem một sách cụ thể
exports.getBookById = async (req, res) => {
  try {
    const book = await Sach.findById(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Sửa thông tin sách
exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await Sach.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Xóa sách
exports.deleteBook = async (req, res) => {
  try {
    await Sach.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted book' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Tìm sách theo tên
exports.searchBookByName = async (req, res) => {
  const searchQuery = req.query.name; // Lấy tên sách từ query string

  try {
    const books = await Sach.find({ TENSACH: { $regex: new RegExp(searchQuery, 'i') } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

