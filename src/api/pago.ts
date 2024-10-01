import { IPostPago } from "@/types";
import axios from "../lib/axios";

export const postPago = async (body: IPostPago) => {
  try {
    return await axios.post("/pagos", body);
  } catch (error) {
    alert("error");
    console.error(error);
  }
};
