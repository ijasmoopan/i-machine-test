import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:8000";

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = (url, params) => apiService.get(url, { params });
export const post = (url, data) => apiService.post(url, data);
export const put = (url, data) => apiService.put(url, data);
export const del = (url) => apiService.delete(url);

export default apiService;
