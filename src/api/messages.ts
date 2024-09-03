import axios from "../lib/axios";

export const getAllMessages = async () => {
  return await axios.get("/mensajes");
};
