import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter-slice";
import { cartReducer } from "./features/cart-slice";
import { filterReducer } from "./features/filter-slice";
const store = configureStore({
  reducer: {
    counter:counterReducer,
    cart:cartReducer,
    filters:filterReducer
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
export default store;
