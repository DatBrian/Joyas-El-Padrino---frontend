import { create } from "zustand";
import { MessageStore } from "./messageStore.types";

export const useMessagesStore = create<MessageStore>((set) => ({
  allMessages: [],
  filteredMessages: [],
  filterType: "all",
  setAllMessages: (allMessages) => set({ allMessages }),
  setFilteredMessages: (filteredMessages) => set({ filteredMessages }),
  setFilterType: (filterType: string) => {
    set((state) => {
      const filteredMessages = state.allMessages.filter((message) => {
        switch (filterType) {
          case "unread":
            return !message.readed;
          case "read":
            return message.readed;
          default:
            return true;
        }
      });

      return { filterType, filteredMessages };
    });
  },
}));
