import axios from 'axios';

// eslint-disable-next-line no-undef
const BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:4000';

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token')
  },
  withCredentials: true
});
