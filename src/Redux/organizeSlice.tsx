import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Step1 = {
  name: string;
  lastName: string;
  phoneNumber: string;
  kindofHelp: string;
};
export type Step2 = {
  date: string;
  time: string;
  city: string;
  street: string;
  addInfo: string;
};

interface Form {
  step1: Step1 | null;
  step2: Step2 | null;
}

const initialState: Form = {
  step1: null,
  step2: null
};

const organizeSlice = createSlice({
  name: "organize",
  initialState,
  reducers: {
    setStep1Data: (state, action: PayloadAction<Step1>) => {
      state.step1 = action.payload;
    },
    setStep2Data: (state, action: PayloadAction<Step2>) => {
      state.step2 = action.payload;
    },
    resetForm: (state) => {
      state.step1 = null;
      state.step2 = null;
    }
  }
});

export const { setStep1Data, setStep2Data, resetForm } = organizeSlice.actions;
export default organizeSlice.reducer;
