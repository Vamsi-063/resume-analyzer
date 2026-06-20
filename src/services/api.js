import axios from "axios";

const api = axios.create({
  baseURL: "https://resumebackend-ew7w.onrender.com",
});

export default api;