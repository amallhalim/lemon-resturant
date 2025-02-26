import { create } from "zustand";

const useCartStore = create(set=>({
    cartData:[],
    addToCart :(newProduct)=> set(state=>({
        cartData :[...state.cartData,newProduct]
    }))
    ,clearCart :()=>set(state=>{
        cartData:[];
    })
}))

export default useCartStore;