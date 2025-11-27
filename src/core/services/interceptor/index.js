import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error.response.status === 401) {
    // localStorage.removeItem("token");
    console.log(error);
  }
  if (error.response.status >= 404 && error.response.status < 500) {
    // alert("Client Error:", error.response.status);
  }
  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((config) => {
  
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    console.log("token in header:", token)
    if (token) config.headers.Authorization = `Bearer ${token}`;
    console.log("token in local:",localStorage.getItem("token"))
  }

  return config;
});

export default instance;
