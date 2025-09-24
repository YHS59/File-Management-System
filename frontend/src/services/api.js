// frontend/src/services/api.js
import axios from "axios";

// baseURL points to backend server
const api = axios.create({
  baseURL: "https://file-management-system-101.onrender.com",
});

export default api;
