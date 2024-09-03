import axios from "axios";
import { useAuthStore } from "@/store/authStore/authStore";

const authApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_BACK,
  withCredentials: true,
});

authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default authApi;
