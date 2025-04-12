// src/store/userStore.js

import { create } from "zustand";

const useUserStore = create((set) => ({
  // user: null,
  user:  {} ,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: {} }),
  promoCode:"",
  UpdatePromoCode:(code)=>set({promoCode:code})
}));

export default useUserStore;
