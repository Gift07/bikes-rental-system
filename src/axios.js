import axios from "axios";

const baseURL = "http://bikes-rent.herokuapp.com/api/";
const refresh_token =
  typeof window !== "undefined" && localStorage.getItem("refreshToken");

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});


export default axiosInstance;