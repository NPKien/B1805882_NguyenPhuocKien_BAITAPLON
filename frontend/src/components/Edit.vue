<template>
  <div>
    <h2>Chỉnh sửa sách</h2>
    <form @submit.prevent="updateBook" class="edit-book-form">
      <div class="form-group">
        <label for="TENSACH">Tên sách:</label>
        <input type="text" id="TENSACH" v-model="book.TENSACH" required class="input-field">
      </div>
      <div class="form-group">
        <label for="DONGIA">Đơn giá:</label>
        <input type="number" id="DONGIA" v-model="book.DONGIA" required class="input-field">
      </div>
      <div class="form-group">
        <label for="SOQUYEN">Số lượng quyển:</label>
        <input type="number" id="SOQUYEN" v-model="book.SOQUYEN" required class="input-field">
      </div>
      <div class="form-group">
        <label for="NAMXUATBAN">Năm xuất bản:</label>
        <input type="number" id="NAMXUATBAN" v-model="book.NAMXUATBAN" required class="input-field">
      </div>
      <div class="form-group">
        <label for="MANXB">Mã NXB:</label>
        <input type="text" id="MANXB" v-model="book.MANXB" required class="input-field">
      </div>
      <div class="form-group">
        <label for="TACGIA">Tác giả:</label>
        <input type="text" id="TACGIA" v-model="book.TACGIA" required class="input-field">
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
      book: {}
    };
  },
  created() {
    this.fetchBook();
  },
  methods: {
    async fetchBook() {
      try {
        const response = await axios.get(`http://localhost:3000/books/${this.$route.params.id}`);
        this.book = response.data;
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    },
    async updateBook() {
      try {
        await axios.patch(`http://localhost:3000/books/${this.$route.params.id}`, this.book);
        // Redirect to the book list page after updating
        this.$router.push('/books');
      } catch (error) {
        console.error('Error updating book:', error);
      }
    }
  }
};
</script>

<style scoped>
.edit-book-form {
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
