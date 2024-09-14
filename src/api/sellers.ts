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

export const getSelelrDetails = async (id: string | undefined) => {
  try {
    return await axios.get(`/usuarios/sellers/${id}`);
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

export const deleteSeller = async (id: string) => {
  try {
    return await axios.delete("usuarios", { params: { id } });
  } catch (error) {
    alert("error");
    console.log(error);
  }
};
