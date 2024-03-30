import { createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";

const regSlice = createSlice({
  name: "reg",
  initialState: {},
  reducers: {
    registerUser: async (state, action) => {
      const { email, password } = action.payload;
      try {
        //register user
        await createUserWithEmailAndPassword(auth, email, password);
        //sign in the user after the registration
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error: any) {
        console.error("Registration failed:", error.message);
      }
    }
  }
});

export const { registerUser } = regSlice.actions;
export default regSlice.reducer;
