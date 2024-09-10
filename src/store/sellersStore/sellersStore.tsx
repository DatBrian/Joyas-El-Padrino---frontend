import { create } from "zustand";
import { SellersStore } from "./sellersStore.types";

export const useSellersStore = create<SellersStore>((set) => ({
  allSellers: [],
  setAllSellers: (allSellers) =>
    set(() => ({
      allSellers,
    })),
}));
