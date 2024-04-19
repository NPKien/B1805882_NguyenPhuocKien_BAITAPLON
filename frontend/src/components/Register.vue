<template>
  <table>
    <tr>
      <router-link to="/">Đăng nhập</router-link>
    </tr>
    <tr>
      <div class="registration-forms">
        <div class="left-form">
          <!-- Form đăng ký nhân viên -->
          <div class="registration-form">
            <h1>Đăng ký nhân viên</h1>
            <form @submit.prevent="registerNhanvien" class="form">
              <input v-model="nhanvien.HOTENNV" type="text" placeholder="Họ và tên" class="input-field">
              <input v-model="nhanvien.USERNHANVIEN" type="text" placeholder="Tên đăng nhập" class="input-field">
              <input v-model="nhanvien.PASSWORD" type="password" placeholder="Mật khẩu" class="input-field">
              <input v-model="nhanvien.CHUCVU" type="text" placeholder="Chức vụ" class="input-field">
              <input v-model="nhanvien.DIACHI" type="text" placeholder="Địa chỉ" class="input-field">
              <input v-model="nhanvien.SODIENTHOAI" type="text" placeholder="Số điện thoại" class="input-field">
              <button type="submit" class="btn">Đăng ký nhân viên</button>
            </form>
          </div>
        </div>
        <div class="right-form">
          <!-- Form đăng ký độc giả -->
          <div class="registration-form">
            <h1>Đăng ký độc giả</h1>
            <form @submit.prevent="registerDocgia" class="form">
              <input v-model="docgia.HOLOT" type="text" placeholder="Họ lót" class="input-field">
              <input v-model="docgia.TEN" type="text" placeholder="Tên" class="input-field">
              <input v-model="docgia.USERDOCGIA" type="text" placeholder="Tên đăng nhập" class="input-field">
              <input v-model="docgia.PASSWORD" type="password" placeholder="Mật khẩu" class="input-field">
              <input v-model="docgia.NGAYSINH" type="date" placeholder="Ngày sinh" class="input-field">
              <input v-model="docgia.PHAI" type="text" placeholder="Phái" class="input-field">
              <input v-model="docgia.DIACHI" type="text" placeholder="Địa chỉ" class="input-field">
              <input v-model="docgia.DIENTHOAI" type="text" placeholder="Số điện thoại" class="input-field">
              <button type="submit" class="btn">Đăng ký độc giả</button>
            </form>
          </div>
        </div>
      </div>
    </tr>
  </table>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nhanvien: {
        HOTENNV: '',
        USERNHANVIEN: '',
        PASSWORD: '',
        CHUCVU: '',
        DIACHI: '',
        SODIENTHOAI: ''
      },
      docgia: {
        HOLOT: '',
        TEN: '',
        USERDOCGIA: '',
        PASSWORD: '',
        NGAYSINH: '',
        PHAI: '',
        DIACHI: '',
        DIENTHOAI: ''
      }
    };
  },
  methods: {
    async registerNhanvien() {
      try {
        await axios.post('http://localhost:3000/register/nhanvien', this.nhanvien);
        alert('Đăng ký nhân viên thành công');
        this.clearNhanvienForm();
      } catch (error) {
        alert('Đăng ký nhân viên thất bại: ' + error.response.data.message);
      }
    },
    async registerDocgia() {
      try {
        await axios.post('http://localhost:3000/register/docgia', this.docgia);
        alert('Đăng ký độc giả thành công');
        this.clearDocgiaForm();
      } catch (error) {
        alert('Đăng ký độc giả thất bại: ' + error.response.data.message);
      }
    },
    clearNhanvienForm() {
      this.nhanvien = {
        HOTENNV: '',
        USERNHANVIEN: '',
        PASSWORD: '',
        CHUCVU: '',
        DIACHI: '',
        SODIENTHOAI: ''
      };
    },
    clearDocgiaForm() {
      this.docgia = {
        HOLOT: '',
        TEN: '',
        USERDOCGIA: '',
        PASSWORD: '',
        NGAYSINH: '',
        PHAI: '',
        DIACHI: '',
        DIENTHOAI: ''
      };
    }
  }
};
</script>

<style scoped>
.registration-forms {
  display: flex;
  justify-content: space-between;
}

.left-form {
  flex: 1;
  margin-right: 500px;
  width: 100px;
}

.right-form {
  flex: 1;
}

.registration-form {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form {
  margin-bottom: 20px;
}

.input-field {
  width: calc(100% - 22px); /* width - padding - border */
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
