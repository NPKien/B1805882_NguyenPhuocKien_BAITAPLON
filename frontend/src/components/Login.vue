<template>
    <div></div>

    <div class="login-container">
      <!-- Form đăng nhập -->
      <form @submit.prevent="login" class="login-form">
        <h2 class="login-title">Đăng nhập</h2>
        <div class="form-group">
          <input v-model="formData.USER" type="text" placeholder="Tên đăng nhập" class="input-field">
        </div>
        <div class="form-group">
          <input v-model="formData.PASSWORD" type="password" placeholder="Mật khẩu" class="input-field">
        </div>
        <button type="submit" class="login-btn">Đăng nhập</button>
      </form>
  
      <!-- Liên kết đến trang đăng ký -->
      <router-link to="/register" class="register-link">Chưa có tài khoản? Đăng ký ngay!</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Admin from './Listsach.vue'; // Import component Admin.vue
  import User from './User.vue'; // Import component User.vue
  
  export default {
    data() {
      return {
        formData: {
          USER: '',
          PASSWORD: ''
        }
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/login', this.formData);
          const redirectPath = response.data.redirect;
          this.$router.push(redirectPath);
        } catch (error) {
          alert('Đăng nhập thất bại');
        }
      }
    },
    components: {
      Admin,
      User
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    
    background-color: #f0f0f0;
    position: relative;
    bottom: 100px; /* Đặt phần tử ở dưới cùng */
    left: 150px; /* Đặt phần tử ở phía bên trái */
  }
  
  .login-form {
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-title {
    margin-bottom: 20px;
    text-align: center;
    color: #333333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
  
  .login-btn {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #ffffff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .login-btn:hover {
    background-color: #0056b3;
  }
  
  .register-link {
    margin-top: 15px;
    text-align: center;
    color: #007bff;
    text-decoration: none;
  }
  </style>
  