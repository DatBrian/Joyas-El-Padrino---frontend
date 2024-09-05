import { IPostMessage } from "@/types";
import axios from "../lib/axios";

export const getAllMessages = async () => {
  try {
    return await axios.get("/mensajes");
  } catch (error) {
    alert("error");
    console.log(error);
  }
};

export const postMesage = async (body: IPostMessage) => {
  try {
    return await axios.post("/mensajes", body);
  } catch (error) {
    console.log(error);
  }
};
