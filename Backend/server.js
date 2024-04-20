const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/bookstore');


// Import các routes đã chỉnh sửa tên
    
const Register = require('./routes/register.route');
const Login =  require('./routes/login.route');
const addbook = require('./routes/addbook.route');
const books = require('./routes/books');
const nxbs = require('./routes/nxbs');
    
app.use(cors());
app.use(bodyParser.json());
//Use routes
app.use('/register', Register);
app.use('/', Login);
app.use('/', addbook);
app.use('/books', books );
app.use('/nxb', nxbs)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
