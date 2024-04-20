<template>
  <div>
    <h1>Thêm sách</h1>
    <form @submit.prevent="addSach" class="add-book-form">
      <div class="form-group">
        <label for="TENSACH">Tên sách:</label>
        <input type="text" id="TENSACH" v-model="TENSACH" required class="input-field">
      </div>
      <div class="form-group">
        <label for="DONGIA">Đơn giá:</label>
        <input type="number" id="DONGIA" v-model="DONGIA" required class="input-field">
      </div>
      <div class="form-group">
        <label for="SOQUYEN">Số lượng quyển:</label>
        <input type="number" id="SOQUYEN" v-model="SOQUYEN" required class="input-field">
      </div>
      <div class="form-group">
        <label for="NAMXUATBAN">Năm xuất bản:</label>
        <input type="number" id="NAMXUATBAN" v-model="NAMXUATBAN" required class="input-field">
      </div>
      <div class="form-group">
        <label for="TENNXB">Tên NXB:</label>
        <input type="text" id="TENNXB" v-model="TENNXB" required class="input-field">
      </div>
      <div class="form-group">
        <label for="TACGIA">Tác giả:</label>
        <input type="text" id="TACGIA" v-model="TACGIA" required class="input-field">
      </div>
      <button type="submit" class="submit-btn">Thêm</button>
    </form>
    <router-link to="/books">Trở về</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      TENSACH: '',
      DONGIA: '',
      SOQUYEN: '',
      NAMXUATBAN: '',
      TENNXB: '',
      TACGIA: ''
    };
  },
  methods: {
    async addSach() {
      try {
    
        await axios.post('http://localhost:3000/sach', {
          TENSACH: this.TENSACH,
          DONGIA: this.DONGIA,
          SOQUYEN: this.SOQUYEN,
          NAMXUATBAN: this.NAMXUATBAN,
          TENNXB: this.TENNXB,
          TACGIA: this.TACGIA
        });
        alert('Thêm sách thành công');

        this.TENSACH = '';
        this.DONGIA = '';
        this.SOQUYEN = '';
        this.NAMXUATBAN = '';
        this.TENNXB = '';
        this.TACGIA = '';
      } catch (error) {
        console.error('Thêm sách thất bại:', error);
        alert('Thêm sách thất bại. Vui lòng thử lại sau.');
      }
    }
  }
};
</script>

<style scoped>
.add-book-form {
  width: 300px;
  margin: 0 auto;
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

.submit-btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>
