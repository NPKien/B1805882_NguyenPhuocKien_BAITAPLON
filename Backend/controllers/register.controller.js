const bcrypt = require('bcrypt');
const { User, Docgia, Nhanvien } = require('../models/index');


let currentDocGiaID = 0;
let currentNhanVienID = 0;

function generateMADocGia() {
    currentDocGiaID++;
    return currentDocGiaID.toString();
}


function generateMANhanVien() {
    currentNhanVienID++;
    return currentNhanVienID.toString();
}


exports.registerNhanvien = async (req, res) => {
    try {
        const { HOTENNV, PASSWORD, CHUCVU, DIACHI, SODIENTHOAI } = req.body;

     
        const existingUser = await User.findOne({ USER: req.body.USERNHANVIEN });
        if (existingUser) {
            return res.status(400).json({ message: 'Tên tài khoản đã tồn tại.' });
        }

        const MSNV = generateMANhanVien();

      
        const hashedPassword = await bcrypt.hash(PASSWORD, 10);


        const newNhanvien = new Nhanvien({
            MSNV,
            HOTENNV,
            USERNHANVIEN: req.body.USERNHANVIEN,
            PASSWORD: hashedPassword,
            CHUCVU,
            DIACHI,
            SODIENTHOAI
        });

     
        await newNhanvien.save();

        const newUser = new User({
            USER: req.body.USERNHANVIEN,
            PASSWORD: hashedPassword,
            ADMIN: '1'
        });

    
        await newUser.save();

        res.status(201).json({ message: 'Đăng ký nhân viên thành công' });
    } catch (error) {
        console.error('Đăng ký nhân viên thất bại:', error);
        res.status(500).json({ message: 'Đăng ký nhân viên thất bại. Vui lòng thử lại sau.' });
    }
};


exports.registerDocgia = async (req, res) => {
    try {
        const { HOLOT, TEN, PASSWORD, NGAYSINH, PHAI, DIACHI, DIENTHOAI } = req.body;

    
        const existingUser = await User.findOne({ USER: req.body.USERDOCGIA });
        if (existingUser) {
            return res.status(400).json({ message: 'Tên tài khoản đã tồn tại.' });
        }

        
        const MADOCGIA = generateMADocGia();

       
        const hashedPassword = await bcrypt.hash(PASSWORD, 10);

     
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

   
        await newDocgia.save();

        const newUser = new User({
            USER: req.body.USERDOCGIA,
            PASSWORD: hashedPassword,
            ADMIN: '0'
        });

 
        await newUser.save();

        res.status(201).json({ message: 'Đăng ký đọc giả thành công' });
    } catch (error) {
        console.error('Đăng ký đọc giả thất bại:', error);
        res.status(500).json({ message: 'Đăng ký đọc giả thất bại. Vui lòng thử lại sau.' });
    }
};
