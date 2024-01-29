import { createSlice } from "@reduxjs/toolkit";

export const settingsPageSlice = createSlice({
  name: "settingsPageSlice",
  initialState: false,
  reducers: {
    showPage: (state) => {
      return true;
    },
    hidePage: (state) => {
      return false;
    },
  },
});

export const { showPage, hidePage } = settingsPageSlice.actions;

export default settingsPageSlice.reducer;
