import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cutt.ly/api/'
});

export default api;
