// src/store/userStore.js

import { create } from "zustand";

const useUserStore = create((set) => ({
  user: { id: null, name: '', email: '' },
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: { id: null, name: '', email: '' } }),
  promoCode:"",
  UpdatePromoCode:(code)=>set({promoCode:code})
}));

export default useUserStore;
