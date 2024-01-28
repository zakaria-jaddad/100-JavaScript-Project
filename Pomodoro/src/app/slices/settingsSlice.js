import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: false,
  reducers: {
    show: (state) => {
      state = true;
      return state;
    },
    hide: (state) => {
      state = false;
      return state;
    },
  },
});

export const { show, hide } = settingsSlice.actions;

export default settingsSlice.reducer;
