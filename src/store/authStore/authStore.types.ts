export type State = {
  name: string;
  token: string;
  id: string;
};

export type Actions = {
  setToken: (token: string) => void;
  setProfile: (name: string) => void;
  setId: (name: string) => void;
};
