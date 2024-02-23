import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/getDataFromLocalStorage";

const KEY = "activeTimer";
const initialState = getDataFromLocalStorage(KEY, {
  pomodoro: {
    isActive: true,
    counter: 1,
  },
  shortBreak: {
    isActive: false,
    counter: 1,
  },
  longBreak: {
    isActive: false,
    counter: 1,
  },
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
      const { payload } = actions;
      // ===

      const updatedState = Object.keys(state).reduce((acc, key) => {
        acc[key] = { ...state[key], isActive: key === payload };
        return acc;
      }, {});

      // ===
      saveDataToLocalStorage(KEY, updatedState);
      return updatedState;
    },
  },
});

export const { updateActiveTimer } = activeTimerSlice.actions;

export default activeTimerSlice.reducer;
