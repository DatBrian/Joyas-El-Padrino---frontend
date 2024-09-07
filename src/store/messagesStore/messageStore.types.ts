import { IGetMessages } from "@/types";

type State = {
  allMessages: IGetMessages[];
  filteredMessages: IGetMessages[];
  filterType: string;
};

type Actions = {
  setAllMessages: (allMessages: IGetMessages[]) => void;
  setFilteredMessages: (filteredMessages: IGetMessages[]) => void;
  setFilterType: (filterType: string) => void;
};

export type MessageStore = State & Actions;
