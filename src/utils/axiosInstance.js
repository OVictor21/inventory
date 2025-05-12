import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sims-mup1.onrender.com", 
  withCredentials: true 
});

export default axiosInstance;
