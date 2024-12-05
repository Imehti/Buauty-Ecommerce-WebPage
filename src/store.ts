import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter-slice";
import { cartReducer } from "./features/cart-slice";
const store = configureStore({
  reducer: {
    counter:counterReducer,
    cart:cartReducer
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
export default store;
