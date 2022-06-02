import axios from "axios";

const baseURL = "https://bikes-rent.herokuapp.com/api/";

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use((req) => {
  if(localStorage.getItem('token') ){
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
  }
  return req
})

export default axiosInstance;