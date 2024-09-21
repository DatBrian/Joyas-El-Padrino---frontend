import { IGetSellerDetails, IPostUser } from "@/types";
import axios from "../lib/axios";

export const getUsersBySeller = async (id: string) => {
  try {
    const users = await axios.get(`/usuarios/seller/${id}`);
    return users.data;
  } catch (error) {
    alert("error");
    console.log(error);
  }
};

export const getUserDetails = async (id: string | undefined) => {
  try {
    const user = await axios.get(`/usuarios/details/${id}`);

    return user.data[0];
  } catch (error) {
    alert("error");
    console.log(error);
  }
};

export const getAllSellers = async () => {
  try {
    return await axios.get("/usuarios/sellers");
  } catch (error) {
    alert("error");
    console.log(error);
  }
};

export const getSellerDetails = async (
  id: string | undefined
): Promise<IGetSellerDetails | undefined> => {
  try {
    const seller = await axios.get(`/usuarios/sellers/${id}`);
    return seller.data[0];
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
