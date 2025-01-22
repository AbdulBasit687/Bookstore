import axios from 'axios';

// Create an Axios instance with a base URL
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Update with your backend base URL
});

// Add a response interceptor for global error handling (optional)
API.interceptors.response.use(
    (response) => {
        // Return the response directly if successful
        return response;
    },
    (error) => {
        // Handle errors globally
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default API;
