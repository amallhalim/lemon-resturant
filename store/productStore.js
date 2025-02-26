import { create } from "zustand";

const useProductStore = create((set) => ({
  selectedproductData: {}, 
  productData: {}, 
  allProductList: [{}, {}], 
  updateSelectedProduct: (newProduct) => set((state) => ({
    selectedproductData: newProduct,  
  })),
  addProduct: (newProduct) => set((state) => ({
    allProductList: [...state.allProductList, newProduct],  
  })),
  removeSingleProduct: (productId) =>
    set((state) => ({
      allProductList: state.allProductList.filter((product) => product.id !== productId),
    })),
  removeAllProduct: () => set({ allProductList: [] }),  // Clears all products
}));

export default useProductStore;
