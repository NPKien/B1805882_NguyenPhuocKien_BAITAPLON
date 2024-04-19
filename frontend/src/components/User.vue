<template>
  <div class="addressa">
    <h2>Danh sách sách</h2>

    <!-- Input và nút tìm kiếm -->
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Nhập tên sách..." class="search-input">
      <button @click="searchBooks" class="search-button">Tìm kiếm</button>
    </div>

    <ul class="book-list">
      <li v-for="book in books" :key="book._id" class="book-item">
        <p>{{ book.TENSACH }}  Tác giả: {{ book.TACGIA }}</p>
        <router-link :to="'/detail/' + book._id" class="edit-link">Chi tiêt</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [],
      searchQuery: '' // Thêm dữ liệu để lưu trữ truy vấn tìm kiếm
    };
  },
  created() {
    this.fetchBooks();
  },
  methods: {
    async fetchBooks() {
      try {
        const response = await axios.get('http://localhost:3000/books/');
        this.books = response.data;
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
    async searchBooks() {
      try {
        const response = await axios.get(`http://localhost:3000/books/search?name=${this.searchQuery}`);
        this.books = response.data;
      } catch (error) {
        console.error('Error searching books:', error);
      }
    }
  }
};
</script>

<style scoped>
.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #0056b3;
}

.book-list {
  list-style-type: none;
  padding: 0;
}

.book-item {
  margin-bottom: 10px;
}

.delete-button {
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #dc3545;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c82333;
}

.edit-link {
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
}

.edit-link:hover {
  background-color: #218838;
}
.addressa {
  position: fixed;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 200px;
}
</style>
