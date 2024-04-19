<template>
  <div>
    <h2>Chỉnh sửa thông tin nhà xuất bản</h2>
    <form @submit.prevent="updatePublisher" class="edit-publisher-form">
      <div class="form-group">
        <label for="TENNXB">Tên nhà xuất bản:</label>
        <input type="text" id="TENNXB" v-model="publisher.TENNXB" required class="input-field">
      </div>
      <div class="form-group">
        <label for="DIACHI">Địa chỉ:</label>
        <input type="text" id="DIACHI" v-model="publisher.DIACHI" required class="input-field">
      </div>
      <button type="submit" class="submit-btn">Lưu</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      publisher: {}
    };
  },
  created() {
    this.fetchPublisher();
  },
  methods: {
    async fetchPublisher() {
      try {
        const response = await axios.get(`http://localhost:3000/nxb/${this.$route.params.id}`);
        this.publisher = response.data;
      } catch (error) {
        console.error('Error fetching publisher:', error);
      }
    },
    async updatePublisher() {
      try {
        await axios.patch(`http://localhost:3000/nxb/${this.$route.params.id}`, this.publisher);
        // Redirect to the publisher list page after updating
        this.$router.push('/nxbs');
      } catch (error) {
        console.error('Error updating publisher:', error);
      }
    }
  }
};
</script>

<style scoped>
.edit-publisher-form {
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
