import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "@/hooks/useProducts"; // Ensure this path is correct

// Define the CartItem interface
export interface CartItem extends Products {
  quantity: number; // Add the quantity property
}

// Define the CartState interface
export interface CartState {
  items: { [userId: string]: CartItem[] }; // A mapping of user IDs to cart items
}

// Initial state for the cart
const initialState: CartState = {
  items: {},
};

// Create the cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ userId: string; item: CartItem }>) => {
      const { userId, item } = action.payload;
      if (!state.items[userId]) {
        state.items[userId] = []; // Initialize cart for the user if it doesn't exist
      }
      const existingItem = state.items[userId].find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity; // Update quantity if item exists
      } else {
        state.items[userId].push({ ...item, quantity: item.quantity }); // Add new item to cart
        localStorage.setItem('userProducts',JSON.stringify(state.items[userId]))
      }
    },
    removeFromCart: (state, action: PayloadAction<{ userId: string ; itemId: number }>) => {
      const { userId, itemId } = action.payload;
      if (state.items[userId]) {
        state.items[userId] = state.items[userId].filter((item) => item.id !== itemId); // Remove item from cart
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ userId: string; id: number; quantity: number }>
    ) => {
      const { userId, id, quantity } = action.payload; // Destructure userId, id, and quantity
      const item = state.items[userId]?.find((item) => item.id === id); // Find item in user's cart
      if (item) {
        item.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export the actions
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

// Export the reducer
export const cartReducer = cartSlice.reducer;