import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../../hooks/useLocalStorage";

const initialState = useLocalStorage({
  key: "theme",
  type: "getData", 
  value: {
    "main-bg-color": "#3C3633",
    "main-text-color ": "#EEEDEB",
    "second-text-color": "#1F1717",
    "third-text-color": "#747264",
    "active-button": "#84C733CC",
  },
});

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    updateTheme: (state, actions) => {
      useLocalStorage({ key: "theme", value: actions.payload, type: "saveData" });
      return { ...actions.payload };
    },
  },
});

export const { updateTheme } = themeSlice.actions;
export default themeSlice.reducer;
