import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  initialState: 1000,
  name: "bankSlice",
  reducers: {
    withdraw: (state, action) => {
      return state - action.payload;
    },
    deposit: (state, action) => {
      return state + action.payload;
    },
  },
});

export const { withdraw, deposit } = bankSlice.actions;
export default bankSlice.reducer;
