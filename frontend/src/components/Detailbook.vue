<template>
    <div class="addressa">
      <h2>Xem chi tiết sách</h2>
      <div class="book-details">
        <div class="form-group">
          <label for="TENSACH">Tên sách:</label>
          <span class="field-background">{{ book.TENSACH }}</span>
        </div>
        <div class="form-group">
          <label for="DONGIA">Đơn giá:</label>
          <span class="field-background">{{ book.DONGIA }}</span>
        </div>
        <div class="form-group">
          <label for="SOQUYEN">Số lượng quyển:</label>
          <span class="field-background">{{ book.SOQUYEN }}</span>
        </div>
        <div class="form-group">
          <label for="NAMXUATBAN">Năm xuất bản:</label>
          <span class="field-background">{{ book.NAMXUATBAN }}</span>
        </div>
        <div class="form-group">
          <label for="MANXB">Mã NXB:</label>
          <span class="field-background">{{ book.MANXB }}</span>
        </div>
        <div class="form-group">
          <label for="TACGIA">Tác giả:</label>
          <span class="field-background">{{ book.TACGIA }}</span>
        </div>
        <router-link to="/user">Trở về</router-link>
      </div>
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
      }
    }
  };
  </script>
  
  <style scoped>
  .book-details {
    width: 300px;
    
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: inline-block;
    width: 100px;
  }
  
  .field-background {
    display: inline-block;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    background-color: #f0f0f0; /* Màu nền */
    width: 200px; /* Độ rộng */
  }
  .addressa {
  position: fixed;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 200px;
}
  </style>
  