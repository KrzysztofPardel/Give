import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

import formSlice from "./formSlice";
import organizeSlice from "./organizeSlice";
import dataCounter from "./dataCounterSlice";

export interface UserState {
  isLoggedIn: boolean;
}

const store = configureStore({
  reducer: {
    auth: authSlice,
    form: formSlice,
    organize: organizeSlice,
    dataCounter: dataCounter
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
