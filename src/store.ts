import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./features/counter-slice";
const store = configureStore({
  reducer: {
    counter:counterReducer
  },
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
export default store;
