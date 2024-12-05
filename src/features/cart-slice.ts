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

// Function to load cart data from localStorage
const loadCartFromLocalStorage = (): { [userId: string]: CartItem[] } => {
  const userProducts = localStorage.getItem('userProducts');
  if (userProducts) {
    try {
      return JSON.parse(userProducts);
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      return {};
    }
  }
  return {};
};

// Initial state for the cart
const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

// Create the cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart or update its quantity
    addToCart: (state, action: PayloadAction<{ userId: string; item: CartItem }>) => {
      const { userId, item } = action.payload;
      if (!state.items[userId]) {
        state.items[userId] = []; // Initialize cart for the user if it doesn't exist
      }
      const existingItem = state.items[userId].find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity; // Update quantity if item exists
      } else {
        state.items[userId].unshift({ ...item, quantity: item.quantity }); // Add new item to cart
      }
      localStorage.setItem('userProducts', JSON.stringify(state.items)); // Sync with localStorage
    },

    // Remove item from the cart
    removeFromCart: (state, action: PayloadAction<{ userId: string; itemId: number }>) => {
      const { userId, itemId } = action.payload;
      if (state.items[userId]) {
        state.items[userId] = state.items[userId].filter((item) => item.id !== itemId); // Remove item from cart
        localStorage.setItem('userProducts', JSON.stringify(state.items)); // Sync with localStorage
      }
    },

    // Update quantity of an item in the cart
    updateQuantity: (
      state,
      action: PayloadAction<{ userId: string; id: number; quantity: number }>
    ) => {
      const { userId, id, quantity } = action.payload; // Destructure userId, id, and quantity
      const item = state.items[userId]?.find((item) => item.id === id); // Find item in user's cart
      if (item) {
        item.quantity = quantity; // Update the item's quantity
        localStorage.setItem('userProducts', JSON.stringify(state.items)); // Sync with localStorage
      }
    },
  },
});

// Export the actions
export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

// Export the reducer
export const cartReducer = cartSlice.reducer;
