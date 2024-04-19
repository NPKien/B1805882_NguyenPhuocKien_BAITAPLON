const bcrypt = require('bcrypt');
const { User, Docgia, Nhanvien } = require('../models/index');

// Biến toàn cục để lưu trạng thái số lượng đối tượng đã được tạo
let currentDocGiaID = 0;
let currentNhanVienID = 0;

// Hàm để tạo mã MADOCGIA mới
function generateMADocGia() {
    currentDocGiaID++;
    return currentDocGiaID.toString();
}

// Hàm để tạo mã MANV mới
function generateMANhanVien() {
    currentNhanVienID++;
    return currentNhanVienID.toString();
}

// Đăng ký nhân viên
exports.registerNhanvien = async (req, res) => {
    try {
        const { HOTENNV, PASSWORD, CHUCVU, DIACHI, SODIENTHOAI } = req.body;

        // Kiểm tra xem tên tài khoản đã tồn tại chưa
        const existingUser = await User.findOne({ USER: req.body.USERNHANVIEN });
        if (existingUser) {
            return res.status(400).json({ message: 'Tên tài khoản đã tồn tại.' });
        }

        // Tạo mã MANV mới
        const MSNV = generateMANhanVien();

        // Tạo mật khẩu băm
        const hashedPassword = await bcrypt.hash(PASSWORD, 10);

        // Tạo nhân viên mới
        const newNhanvien = new Nhanvien({
            MSNV,
            HOTENNV,
            USERNHANVIEN: req.body.USERNHANVIEN,
            PASSWORD: hashedPassword,
            CHUCVU,
            DIACHI,
            SODIENTHOAI
        });

        // Lưu nhân viên vào database
        await newNhanvien.save();

        // Tạo user mới để lưu thông tin đăng nhập của nhân viên
        const newUser = new User({
            USER: req.body.USERNHANVIEN,
            PASSWORD: hashedPassword,
            ADMIN: '1'
        });

        // Lưu thông tin đăng nhập của nhân viên vào bảng User
        await newUser.save();

        res.status(201).json({ message: 'Đăng ký nhân viên thành công' });
    } catch (error) {
        console.error('Đăng ký nhân viên thất bại:', error);
        res.status(500).json({ message: 'Đăng ký nhân viên thất bại. Vui lòng thử lại sau.' });
    }
};

// Đăng ký đọc giả
exports.registerDocgia = async (req, res) => {
    try {
        const { HOLOT, TEN, PASSWORD, NGAYSINH, PHAI, DIACHI, DIENTHOAI } = req.body;

        // Kiểm tra xem tên tài khoản đã tồn tại chưa
        const existingUser = await User.findOne({ USER: req.body.USERDOCGIA });
        if (existingUser) {
            return res.status(400).json({ message: 'Tên tài khoản đã tồn tại.' });
        }

        // Tạo mã MADOCGIA mới
        const MADOCGIA = generateMADocGia();

        // Tạo mật khẩu băm
        const hashedPassword = await bcrypt.hash(PASSWORD, 10);

        // Tạo đọc giả mới
        const newDocgia = new Docgia({
            MADOCGIA,
            HOLOT,
            TEN,
            USERDOCGIA: req.body.USERDOCGIA,
            PASSWORDDOCGIA: hashedPassword,
            NGAYSINH,
            PHAI,
            DIACHI,
            DIENTHOAI
        });

        // Lưu đọc giả vào database
        await newDocgia.save();

        // Tạo user mới để lưu thông tin đăng nhập của độc giả
        const newUser = new User({
            USER: req.body.USERDOCGIA,
            PASSWORD: hashedPassword,
            ADMIN: '0'
        });

        // Lưu thông tin đăng nhập của độc giả vào bảng User
        await newUser.save();

        res.status(201).json({ message: 'Đăng ký đọc giả thành công' });
    } catch (error) {
        console.error('Đăng ký đọc giả thất bại:', error);
        res.status(500).json({ message: 'Đăng ký đọc giả thất bại. Vui lòng thử lại sau.' });
    }
};
