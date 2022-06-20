import axios from "axios";

const baseURL = "http://localhost:5000/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
})

export default axiosInstance;