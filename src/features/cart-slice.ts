import { Products } from "@/hooks/useProducts";
import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    items:Products[],
    quantity:number
}

const initialState : CartState = {
    items:[],
    quantity:1
}


export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{}
})


export {} = cartSlice.actions

export const cartReducer= cartSlice.reducer