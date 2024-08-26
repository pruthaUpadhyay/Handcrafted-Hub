import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',  // Adjust according to your backend server
});

export default api;
