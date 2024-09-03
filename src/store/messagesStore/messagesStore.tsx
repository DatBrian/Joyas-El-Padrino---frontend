import { create } from "zustand";
import { Actions, State } from "./messageStore.types";

export const useMessagesStore = create((set) => ({
  allMessages: [],
  filteredMesages: [],
  setAllMessages: (allMessages: []) =>
    set(() => ({
      allMessages,
    })),
  setFilteredMessages: (filteredMessages: []) =>
    set(() => ({
      filteredMessages,
    })),
}));
