import { create } from "zustand";

const useProductStore = create((set) => ({
  productData: {},  // The state can hold any data structure you need
  allProductList: [{}, {}],  // Initialize with an example structure
  addProduct: (newProduct) => set((state) => ({
    allProductList: [...state.allProductList, newProduct],  // Correctly add a product to the array
  })),
  removeSingleProduct: (productId) =>
    set((state) => ({
      allProductList: state.allProductList.filter((product) => product.id !== productId),
    })),
  removeAllProduct: () => set({ allProductList: [] }),  // Clears all products
}));

export default useProductStore;
