import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import regSlice from "./regSlice";

export interface UserState {
  isLoggedIn: boolean;
}

const store = configureStore({
  reducer: {
    auth: authSlice,
    reg: regSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
