import { IPostSaldo } from "@/types";
import axios from "../lib/axios";

export const postSaldo = async (body: IPostSaldo) => {
  try {
    return await axios.post("/saldos", body);
  } catch (error) {
    alert("error");
    console.log(error);
  }
};
