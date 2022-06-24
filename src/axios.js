import axios from "axios";

const baseURL = "https://bikes-rent.herokuapp.com/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 6000,
})

export default axiosInstance;