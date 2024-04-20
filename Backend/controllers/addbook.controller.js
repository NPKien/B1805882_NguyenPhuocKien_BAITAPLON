const bcrypt = require('bcrypt');
const { Sach, Nhaxuatban } = require('../models/index');


let currentSachID = 0;
let currentNXBID = 0;

async function generateMaSach() {
    try {
        const latestSach = await Sach.findOne().sort({ MASACH: -1 });
        if (latestSach) {
            const latestSachID = parseInt(latestSach.MASACH);
            return (latestSachID + 1).toString();
        } else {
            return "1"; 
        }
    } catch (error) {
        console.error('Lỗi khi tạo mã sách:', error);
        throw error;
    }
}


async function generateMaNXB() {
    try {
        const latestNXB = await Nhaxuatban.findOne().sort({ MANXB: -1 });
        if (latestNXB) {
            const latestNXBID = parseInt(latestNXB.MANXB);
            return (latestNXBID + 1).toString();
        } else {
            return "1"; 
        }
    } catch (error) {
        console.error('Lỗi khi tạo mã nhà xuất bản:', error);
        throw error;
    }
}



exports.addNXB = async (req, res) => {
    try {
        const { TENNXB, DIACHI } = req.body;

        const MANXB = await generateMaNXB();
        const existingNXB = await Nhaxuatban.findOne({ TENNXB });
        if (existingNXB) {
            return res.status(400).json({ message: 'Nhà xuất bản đã tồn tại.' });
        }

        const newNXB = new Nhaxuatban({
            MANXB,
            TENNXB,
            DIACHI
        });
        await newNXB.save();

        res.status(201).json({ message: 'Thêm NXB thành công' });
    } catch (error) {
        console.error('Thêm NXB thất bại:', error);
        res.status(500).json({ message: 'Thêm NXB thất bại. Vui lòng thử lại sau.' });
    }
};



exports.addSach = async (req, res) => {
    try {
        const { TENSACH, DONGIA, SOQUYEN, NAMXUATBAN, TENNXB, TACGIA } = req.body;

        const nhaxuatban = await Nhaxuatban.findOne({ TENNXB });
        if (!nhaxuatban) {
            return res.status(400).json({ message: 'Nhà xuất bản không tồn tại.' });
        }

        const { MANXB } = nhaxuatban;


        const MASACH = await generateMaSach();


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

        await newSach.save();

        res.status(201).json({ message: 'Thêm sách thành công' });
    } catch (error) {
        console.error('Thêm sách thất bại:', error);
        res.status(500).json({ message: 'Thêm sách thất bại. Vui lòng thử lại sau.' });
    }
};
