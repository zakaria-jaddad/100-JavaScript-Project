import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage, {
  SAVE_DATA,
  GET_DATA,
} from "../../../hooks/useLocalStorage";
import saveDataToLocalStorage from "../../util/saveDataTolocalStorage";

const KEY = "settingsPage";
const initialState = useLocalStorage({
  key: KEY,
  type: GET_DATA,
  value: false,
});
export const settingsPageSlice = createSlice({
  name: "settingsPageSlice",
  initialState,
  reducers: {
    showPage: (state) => {
      saveDataToLocalStorage(KEY, true);
      return true;
    },
    hidePage: (state) => {
      saveDataToLocalStorage(KEY, false);
      return false;
    },
  },
});

export const { showPage, hidePage } = settingsPageSlice.actions;

export default settingsPageSlice.reducer;
