import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
});

instance.defaults.timeout = 60000;

if (process.env.NODE_ENV !== "production") {
  instance.interceptors.request.use((request) => {
    return request;
  });
}

export default instance;
