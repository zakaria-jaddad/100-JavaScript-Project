import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/getDataFromLocalStorage";

const KEY = "activeTimer";
const initialState = getDataFromLocalStorage(KEY, {
  pomodoro: true,
  shortBreak: false,
  longBreak: false,
});

const activeTimerSlice = createSlice({
  name: "activeTimerSlice",
  initialState,
  reducers: {
    /* 
      get new activeTimer and save it to localstorage 
      update it in the redux state
    */
    updateActiveTimer: (state, actions) => {
      const newState = { ...state };
      for (const [key] of Object.entries(newState)) {
        if (key == actions.payload) {
          newState[key] = true;
        } else {
          newState[key] = false;
        }
      }
      saveDataToLocalStorage(KEY, { ...newState });
      return { ...newState };
    },
  },
});

export const { updateActiveTimer } = activeTimerSlice.actions;

export default activeTimerSlice.reducer;
