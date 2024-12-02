import { Products } from "@/hooks/useProducts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem extends Products {
  quantity: number; // Add the quantity property
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.unshift({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

  },
});

export const {addToCart,updateQuantity} = cartSlice.actions

export const cartReducer = cartSlice.reducer;
