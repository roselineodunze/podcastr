import { create } from "zustand";

const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user-info");
    return user ? JSON.parse(user) : null;
  }
  return null;
};

const useAuthStore = create((set) => ({
  user: getUserFromLocalStorage(),
  login: (user) => {
    localStorage.setItem("user-info", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("user-info");
    set({ user: null })
  } ,
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
