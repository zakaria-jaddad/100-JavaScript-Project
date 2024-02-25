import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/saveDataTolocalStorage";
import getDataFromLocalStorage from "../../util/getDataFromLocalStorage";

const KEY = "timers";
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

const timersSlice = createSlice({
  name: "timersSlice",
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
    updatePomodoroTimerCounter: (state, actions) => {
      const { payload } = actions;
      state.pomodoro.counter = parseInt(payload);

      saveDataToLocalStorage(KEY, state);
      return state;
    },
    updateShortBreakTimerCounter: (state, actions) => {
      const { payload } = actions;
      state.shortBreak.counter = parseInt(payload);

      saveDataToLocalStorage(KEY, state);
      return state;
    },
    updateLongBreakTimerCounter: (state, actions) => {
      const { payload } = actions;
      state.longBreak.counter = parseInt(payload);

      saveDataToLocalStorage(KEY, state);
      return state;
    },
  },
});

export const {
  updateActiveTimer,
  updatePomodoroTimerCounter,
  updateShortBreakTimerCounter,
  updateLongBreakTimerCounter,
} = timersSlice.actions;

export default timersSlice.reducer;
