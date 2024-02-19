import {
  ActionCreatorWithPayload,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { Timestamp } from "firebase/firestore";

type Step1 = {
  typeOfHelp: string;
};
type Step2 = {
  bagsAmount: number;
};
type Step3 = {
  help: string;
  receivers: string;
  organization: string;
};
type Step4 = {
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  date: string;
  time: number;
  courierInfo: string;
};

type Summary = {
  bagsAmount: number;
  typeOfHelp: string[];
  location: string;
  organization?: string; // Make organization optional as it's not always filled
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  date: string;
  time: string;
  courierInfo: string;
};

interface Form {
  step1: Step1 | null;
  step2: Step2 | null;
  step3: Step3 | null;
  step4: Step4 | null;
  summary: Summary | null;
}
const initialState: Form = {
  step1: null,
  step2: null,
  step3: null,
  step4: null,
  summary: null
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStep1Data: (state, action: PayloadAction<Step1>) => {
      state.step1 = action.payload;
    },
    setStep2Data: (state, action: PayloadAction<Step2>) => {
      state.step2 = action.payload;
    },
    setStep3Data: (state, action: PayloadAction<Step3>) => {
      state.step3 = action.payload;
    },
    setStep4Data: (state, action: PayloadAction<Step4>) => {
      state.step4 = action.payload;
    },
    setSummary: (state, action: PayloadAction<Summary>) => {
      state.summary = action.payload;
    }
  }
});

export const {
  setStep1Data,
  setStep2Data,
  setStep3Data,
  setStep4Data,
  setSummary
} = formSlice.actions;
export default formSlice.reducer;
