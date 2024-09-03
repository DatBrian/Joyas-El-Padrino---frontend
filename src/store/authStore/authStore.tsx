import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Actions, State } from "./authStore.types";

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      name: "",
      token: "",
      setToken: (token: string) =>
        set(() => ({
          token,
        })),
      setProfile: (name: string) =>
        set(() => ({
          name,
        })),
    }),
    { name: "auth" }
  )
);
