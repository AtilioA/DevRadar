import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.254.100:2832',
});

export default api;
