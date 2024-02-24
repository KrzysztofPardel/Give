import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DonationsState {
  counter: number;
}

const initialState: DonationsState = {
  counter: 0
};

const dataCounterSlice = createSlice({
  name: "dataCounter",
  initialState,
  reducers: {
    incrementCounter(state) {
      state.counter++;
    },
    setCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    }
  }
});

export const { incrementCounter, setCounter } = dataCounterSlice.actions;
export default dataCounterSlice.reducer;
