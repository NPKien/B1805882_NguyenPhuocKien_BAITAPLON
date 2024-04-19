const mongoose = require('mongoose');

const nhaxuatbanSchema = new mongoose.Schema({
  MANXB: { type: String, required: true },
  TENNXB: { type: String, required: true },
  DIACHI: { type: String, required: true }
});

const sachSchema = new mongoose.Schema({
  MASACH: { type: String, required: true },
  TENSACH: { type: String, required: true },
  DONGIA: { type: Number, required: true },
  SOQUYEN: { type: Number, required: true },
  NAMXUATBAN: { type: Number, required: true },
  MANXB: { type: String, required: true },
  TACGIA: { type: String, required: true }
});

const theodoimuonsachSchema = new mongoose.Schema({
  MADOCGIA: { type: String, required: true },
  MASACH: { type: String, required: true },
  NGAYMUON: { type: Date, required: true },
  NGAYTRA: { type: Date }
});

const docgiaSchema = new mongoose.Schema({
    MADOCGIA: { type: String, required: true },
    USERDOCGIA: {type: String, require: true},
    PASSWORDDOCGIA: {type: String, require: true},
    HOLOT: { type: String, required: true },
    TEN: { type: String, required: true },
    NGAYSINH: { type: Date, required: true },
    PHAI: { type: String, required: true },
    DIACHI: { type: String, required: true },
    DIENTHOAI: { type: String, required: true }
});
const userSchema = new mongoose.Schema({
    USER: {type: String, require: true},
    PASSWORD: {type: String, require: true},
    ADMIN: {type: String, require: true}
});
const nhanvienSchema = new mongoose.Schema({
    MSNV: { type: String, required: true },
  HOTENNV: { type: String, required: true },
  USERNHANVIEN: {type: String, require: true},
  PASSWORD: { type: String, required: true },
  CHUCVU: { type: String, required: true },
  DIACHI: { type: String, required: true },
  SODIENTHOAI: { type: String, required: true }
});

const Nhaxuatban = mongoose.model('Nhaxuatban', nhaxuatbanSchema);
const Sach = mongoose.model('Sach', sachSchema);
const Theodoimuonsach = mongoose.model('Theodoimuonsach', theodoimuonsachSchema);
const Docgia = mongoose.model('Docgia', docgiaSchema);
const User = mongoose.model('User', userSchema);
const Nhanvien = mongoose.model('Nhanvien', nhanvienSchema);

module.exports = { Nhaxuatban, Sach, Theodoimuonsach, Docgia, User, Nhanvien };
