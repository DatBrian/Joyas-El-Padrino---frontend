import { create } from "zustand";
import { UsersStore } from "./usersStore.types";

export const useUsersStore = create<UsersStore>((set) => ({
  allSellers: [],
  allClients: [],
  setAllSellers: (allSellers) =>
    set(() => ({
      allSellers,
    })),
  setAllClients: (allClients) =>
    set(() => ({
      allClients,
    })),
}));
