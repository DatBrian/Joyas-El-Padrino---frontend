import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Actions, State } from "./authStore.types";

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      name: "",
      token: "",
      id:"",
      setToken: (token: string) =>
        set(() => ({
          token,
        })),
      setProfile: (name: string) =>
        set(() => ({
          name,
        })),
      setId: (id: string) =>
        set(() => ({
          id,
        })),
    }),
    { name: "auth" }
  )
);
