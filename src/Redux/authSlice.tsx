import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
  uid: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: { payload: User }) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    initializeFromLocalStorage: (state) => {
      const user = localStorage.getItem("user");
      if (user) {
        state.isLoggedIn = true;
        state.user = JSON.parse(user);
      }
    }
  }
});

export const { login, logout, initializeFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;
