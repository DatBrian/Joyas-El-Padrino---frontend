export type State = {
  allMessages: [];
  filteredMessages: [];
};

export type Actions = {
  setAllMessages: (allMessages: []) => void;
  setFilteredMessages: (filteredMessages: []) => void;
};
