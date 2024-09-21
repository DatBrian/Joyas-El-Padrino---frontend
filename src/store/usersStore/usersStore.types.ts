import { IGetUser } from "@/types";

type State = {
  allSellers: IGetUser[];
  allClients: IGetUser[];
};

type Actions = {
  setAllSellers: (allSellers: IGetUser[]) => void;
  setAllClients: (allClients: IGetUser[]) => void;
};

export type UsersStore = State & Actions;
