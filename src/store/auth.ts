import { create } from "zustand";

interface AuthState {
  token: string | null;
  setToken: (value: string | null) => void;
}

const useStoreAuth = create<AuthState>((set) => ({
  token: localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken")!)
    : null,
  setToken: (value: string | null) => set({ token: value }),
}));

export { useStoreAuth };
