import axios from "axios";

const baseURL = "https://bikes-rent.herokuapp.com/api/";
const refresh_token =
  typeof window !== "undefined" && localStorage.getItem("refreshToken");

const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Authorization:
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
          ? `${localStorage.getItem("accessToken")}`
          : null
        : null,
    "Content-Type": "application/json",
    Accept: "application.json",
  },
});

axios.interceptors.response.use((response) => {
  return (
    response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        if (refresh_token) {
          const token = JSON.parse(atob(refresh_token.split(".")[1]));
          const currentTime = Math.ceil(Date.now() / 1000);
          if (token.exp > currentTime) {
            return axiosInstance
              .post("jwt-refresh-token/", {
                refresh_token,
              })
              .then((data) => {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                axiosInstance.defaults.headers["Authorization"] =
                  "JWT " + data.accessToken;
                originalRequest.headers["Authorization"] =
                  "JWT " + data.accessToken;

                return axiosInstance(originalRequest);
              });
          } else {
            window.location.href = "/user/sign-in/";
            localStorage.clear();
          }
        } else {
          window.location.href = "/user/sign-in/";
          localStorage.clear();
        }
      }
    }
  );
});

export default axiosInstance;