import { IPostUser } from "@/types";
import axios from "../lib/axios";

export const getAllSellers = async () => {
  try {
    return await axios.get("/usuarios/sellers");
  } catch (error) {
    alert("error");
    console.log(error);
  }
};

export const postSeller = async (body: IPostUser) => {
  try {
    return await axios.post("/auth/register", body);
  } catch (error) {
    alert("error");
    console.log(error);
  }
};
