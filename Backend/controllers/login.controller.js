const bcrypt = require('bcrypt'); // Để mã hóa và so sánh mật khẩu
const {User} = require('../models/index'); 
// Controller để xử lý yêu cầu đăng nhập
exports.login = async (req, res) => {
    const { USER, PASSWORD } = req.body;

    try {
        // Tìm người dùng trong cơ sở dữ liệu dựa trên tên người dùng
        const user = await User.findOne({ USER });

        // Kiểm tra xem người dùng có tồn tại không
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(PASSWORD, user.PASSWORD);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mật khẩu không đúng' });
        }

        // Kiểm tra quyền ADMIN
        if (user.ADMIN === '1') {
            // Nếu là ADMIN, chuyển hướng đến trang Admin.vue
            return res.status(200).json({ redirect: '/books' });
        } else {
            // Nếu không phải là ADMIN, chuyển hướng đến trang User.vue
            return res.status(200).json({ redirect: '/user' });
        }
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        res.status(500).json({ message: 'Đăng nhập thất bại. Vui lòng thử lại sau.' });
    }
};
