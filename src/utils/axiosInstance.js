import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND}/api`, // or the backend URL
  withCredentials: true, 
});

export default instance;