import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sims-mup1.onrender.com", 
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear tokens and redirect to login
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
      window.location.href = "/Login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
