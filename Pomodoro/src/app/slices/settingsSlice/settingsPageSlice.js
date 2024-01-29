import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settingsPage: false,
};

export const settingsPageSlice = createSlice({
  name: "settingsPageSlice",
  initialState: initialState,
  reducers: {
    showPage: (state) => {
      return { ...state, settingsPage: true };
    },
    hidePage: (state) => {
      return { ...state, settingsPage: false };
    },
  },
});

export const { showPage, hidePage } = settingsPageSlice.actions;

export default settingsPageSlice.reducer;
