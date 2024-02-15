import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../../hooks/useLocalStorage";

const KEY = "theme";
const SAVE_DATA = "saveData";
const GET_DATA = "getData";

const initialState = useLocalStorage({
  key: KEY,
  type: GET_DATA,
  value: {
    themeColors: {
      "main-bg-color": "#3C3633",
      "main-text-color ": "#EEEDEB",
      "second-text-color": "#1F1717",
      "third-text-color": "#747264",
      "active-button": "#84C733CC",
    },
    darkModeWhenRunning: false,
  },
});

// ========

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    updateTheme: (state, actions) => {
      useLocalStorage({
        key: KEY,
        value: { ...state, themeColors: actions.payload },
        type: SAVE_DATA,
      });
      return { ...state, themeColors: actions.payload };
    },
    updateDarkModeWhenRunning: (state, actions) => {
      useLocalStorage({
        key: KEY,
        value: { ...state, darkModeWhenRunning: actions.payload },
        type: SAVE_DATA,
      });
      return { ...state, darkModeWhenRunning: actions.payload };
    },
  },
});

export const { updateTheme, updateDarkModeWhenRunning } = themeSlice.actions;
export default themeSlice.reducer;
