const bcrypt = require('bcrypt'); // Để mã hóa và so sánh mật khẩu
const {User} = require('../models/index'); 

exports.login = async (req, res) => {
    const { USER, PASSWORD } = req.body;

    try {
      
        const user = await User.findOne({ USER });

    
        if (!user) {
            return res.status(404).json({ message: 'Người dùng không tồn tại' });
        }

 
        const isPasswordValid = await bcrypt.compare(PASSWORD, user.PASSWORD);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Mật khẩu không đúng' });
        }

        if (user.ADMIN === '1') {
       
            return res.status(200).json({ redirect: '/books' });
        } else {
     
            return res.status(200).json({ redirect: '/user' });
        }
    } catch (error) {
        console.error('Lỗi đăng nhập:', error);
        res.status(500).json({ message: 'Đăng nhập thất bại. Vui lòng thử lại sau.' });
    }
};
