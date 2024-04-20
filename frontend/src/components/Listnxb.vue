<template>
  <div class="addressa">
    <ul>
      <table width="400px" >
        <tr>
          <td>
            <li><router-link to="/books">Danh sách sách</router-link></li>
            <li><router-link to="/addsach">Thêm Sách</router-link></li>
          </td>
          <td>
            <li><router-link to="/nxbs">Danh sách nhà xuất bản</router-link></li>
            <li><router-link to="/addnxb">Thêm nhà xuất bản</router-link></li>
          </td>
        </tr>
      </table>
    </ul>
    <h2>Danh sách nhà xuất bản</h2>

    <!-- Input và nút tìm kiếm -->
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Nhập tên nhà xuất bản..." class="search-input">
      <button @click="searchPublishers" class="search-button">Tìm kiếm</button>
    </div>

    <ul class="publisher-list">
      <li v-for="publisher in publishers" :key="publisher._id" class="publisher-item">
        <p class="publisher-info"> <span class="publisher-name">{{ publisher.MANXB }}. </span> <span class="publisher-name">{{ publisher.TENNXB }}</span> <span class="address">Địa chỉ: {{ publisher.DIACHI }}</span> </p>
        <button @click="deletePublisher(publisher._id)" class="delete-button">Xóa</button>
        <router-link :to="'/editnxb/' + publisher._id" class="edit-link">Chỉnh sửa</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      publishers: [],
      searchQuery: '' // Thêm dữ liệu để lưu trữ truy vấn tìm kiếm
    };
  },
  created() {
    this.fetchPublishers();
  },
  methods: {
    async fetchPublishers() {
      try {
        const response = await axios.get('http://localhost:3000/nxb/');
        this.publishers = response.data;
      } catch (error) {
        console.error('Error fetching publishers:', error);
      }
    },
    async deletePublisher(publisherId) {
      try {
        await axios.delete(`http://localhost:3000/nxb/${publisherId}`);
        this.fetchPublishers(); // Làm mới danh sách nhà xuất bản sau khi xóa
      } catch (error) {
        console.error('Error deleting publisher:', error);
      }
    },
    async searchPublishers() {
      try {
        const response = await axios.get(`http://localhost:3000/nxb/search?name=${this.searchQuery}`);
        this.publishers = response.data;
      } catch (error) {
        console.error('Error searching publishers:', error);
      }
    }
  }
};
</script>

<style scoped>
.publisher-info {
  font-size: 16px;
  margin-bottom: 5px;
}

.publisher-name {
  color: #007bff; /* Màu cho tên nhà xuất bản */
}

.address {
  color: #28a745; /* Màu cho địa chỉ */
}
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

.publisher-list {
  list-style-type: none;
  padding: 0;
}

.publisher-item {
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
