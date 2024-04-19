const bcrypt = require('bcrypt');
const { Sach, Nhaxuatban } = require('../models/index');

// Biến toàn cục để lưu trạng thái số lượng đối tượng đã được tạo
let currentSachID = 0;
let currentNXBID = 0;

// Hàm để tạo mã MASACH mới
async function generateMaSach() {
    try {
        const latestSach = await Sach.findOne().sort({ MASACH: -1 });
        if (latestSach) {
            const latestSachID = parseInt(latestSach.MASACH);
            return (latestSachID + 1).toString();
        } else {
            return "1"; // Trường hợp không có sách nào trong cơ sở dữ liệu
        }
    } catch (error) {
        console.error('Lỗi khi tạo mã sách:', error);
        throw error;
    }
}

// Hàm để tạo mã MANXB mới
async function generateMaNXB() {
    try {
        const latestNXB = await Nhaxuatban.findOne().sort({ MANXB: -1 });
        if (latestNXB) {
            const latestNXBID = parseInt(latestNXB.MANXB);
            return (latestNXBID + 1).toString();
        } else {
            return "1"; // Trường hợp không có nhà xuất bản nào trong cơ sở dữ liệu
        }
    } catch (error) {
        console.error('Lỗi khi tạo mã nhà xuất bản:', error);
        throw error;
    }
}


// Thêm NXB mới
exports.addNXB = async (req, res) => {
    try {
        const { TENNXB, DIACHI } = req.body;

        // Tạo mã NXB mới
        const MANXB = await generateMaNXB();

        // Kiểm tra xem NXB có tồn tại không
        const existingNXB = await Nhaxuatban.findOne({ TENNXB });
        if (existingNXB) {
            return res.status(400).json({ message: 'Nhà xuất bản đã tồn tại.' });
        }

        // Tạo NXB mới
        const newNXB = new Nhaxuatban({
            MANXB,
            TENNXB,
            DIACHI
        });

        // Lưu NXB vào database
        await newNXB.save();

        res.status(201).json({ message: 'Thêm NXB thành công' });
    } catch (error) {
        console.error('Thêm NXB thất bại:', error);
        res.status(500).json({ message: 'Thêm NXB thất bại. Vui lòng thử lại sau.' });
    }
};


// Thêm sách mới
exports.addSach = async (req, res) => {
    try {
        const { TENSACH, DONGIA, SOQUYEN, NAMXUATBAN, TENNXB, TACGIA } = req.body;

        // Tìm nhà xuất bản dựa trên TENNXB
        const nhaxuatban = await Nhaxuatban.findOne({ TENNXB });
        if (!nhaxuatban) {
            return res.status(400).json({ message: 'Nhà xuất bản không tồn tại.' });
        }

        // Lấy MANXB từ nhaxuatban
        const { MANXB } = nhaxuatban;

        // Tạo mã sách mới
        const MASACH = await generateMaSach();

        // Tạo sách mới
        const newSach = new Sach({
            MASACH,
            TENSACH,
            DONGIA,
            SOQUYEN,
            NAMXUATBAN,
            MANXB,
            TENNXB,
            TACGIA
        });

        // Lưu sách vào database
        await newSach.save();

        res.status(201).json({ message: 'Thêm sách thành công' });
    } catch (error) {
        console.error('Thêm sách thất bại:', error);
        res.status(500).json({ message: 'Thêm sách thất bại. Vui lòng thử lại sau.' });
    }
};
