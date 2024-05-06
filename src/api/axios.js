import axios from "axios";

const save = async (key, value) => {
  //save in local storage
  localStorage.setItem(key, value);
};

const get = async (key) => {
  //get from local storage
  return localStorage.getItem(key);
};

export const baseUrl = "https://69-164-195-36.ip.linodeusercontent.com";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

//Request Interceptor for adding token

instance.interceptors.request.use(async (config) => {
  const accessToken = await get("accessToken");
  if (accessToken) {
    config.headers
      ? (config.headers.Authorization = "Bearer " + accessToken)
      : config.headers
      ? (config.headers = { Authorization: "Bearer " + accessToken })
      : (config.headers = {});
  }
  return config;
});

export default instance;
