<template>
  <div>
    <h1>Thêm NXB</h1>
    <form @submit.prevent="addNXB" class="add-nxb-form">
      <div class="form-group">
        <label for="TENNXB">Tên NXB:</label>
        <input type="text" id="TENNXB" v-model="TENNXB" required class="input-field">
      </div>
      <div class="form-group">
        <label for="DIACHI">Địa chỉ:</label>
        <input type="text" id="DIACHI" v-model="DIACHI" required class="input-field">
      </div>
      <button type="submit" class="submit-btn">Thêm</button>
    </form>
    <router-link to="/nxbs">Trở về</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      TENNXB: '',
      DIACHI: ''
    };
  },
  methods: {
    async addNXB() {
      try {
        await axios.post('http://localhost:3000/nxb', {
          TENNXB: this.TENNXB,
          DIACHI: this.DIACHI
        });
        alert('Thêm NXB thành công');
        this.TENNXB = '';
        this.DIACHI = '';
      } catch (error) {
        console.error('Thêm NXB thất bại:', error);
        alert('Thêm NXB thất bại. Vui lòng thử lại sau.');
      }
    }
  }
};
</script>

<style scoped>
.add-nxb-form {
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
