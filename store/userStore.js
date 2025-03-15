// src/store/userStore.js

import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  // user:  { id: 1, name: 'amal', email: 'amal@google.com' } ,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: { id: null, name: '', email: '' } }),
  promoCode:"",
  UpdatePromoCode:(code)=>set({promoCode:code})
}));

export default useUserStore;
