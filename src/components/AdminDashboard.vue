<!-- src/components/AdminDashboard.vue -->

<template>
  <div>
    <h1>Admin Dashboard - All Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="deleteUser(user.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get('/users')
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    },
    deleteUser(userId) {
      axios
        .delete(`/users/${userId}`)
        .then(() => {
          this.fetchUsers(); // Fetch users again to update the list after deletion
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    },
  },
};
</script>
<style>
/* Add your custom styles here */
</style>
