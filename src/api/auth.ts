import axios from "axios";
import { IUserLogin } from "@/types";

const baseUrl = import.meta.env.VITE_BASE_URL_BACK;

export const loginRequest = async (credentials: IUserLogin) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, credentials);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error en la solicitud de login:", {
        message: error.message,
        code: error.code,
        config: error.config,
        response: error.response
          ? {
              status: error.response.status,
              data: error.response.data,
            }
          : undefined,
      });
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};
