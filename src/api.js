// api.js
// eslint-disable-next-line
import axios from 'axios';

// Set the base URL for your Rails API
axios.defaults.baseURL = 'https://api.foxikle.dev';

// Set the authentication token in the request headers for authenticated requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
