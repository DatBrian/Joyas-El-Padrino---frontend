import { IGetUser } from "@/types";

type State = {
  allSellers: IGetUser[];
};

type Actions = {
  setAllSellers: (allSellers: IGetUser[]) => void;
};

export type SellersStore = State & Actions;
