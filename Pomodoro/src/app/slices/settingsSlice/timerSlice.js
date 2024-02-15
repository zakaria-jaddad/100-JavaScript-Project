import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 20,
  shortBreak: 0,
  longBreak: 0,
  autoStartsBreaks: false,
  autoStartsPomodoro: false,
  longBreakInterval: 4,
};

export const timerSlice = createSlice({
  name: "timerSlice",
  initialState: initialState,
  reducers: {
    // TODO: Load additional state from localStorage if available
    updatePomodoro: (state, actions) => {
      return { ...state, pomodoro: parseInt(actions.payload) };
    },
    updateShortBreak: (state, actions) => {
      return { ...state, shortBreak: parseInt(actions.payload) };
    },
    updateLongBreak: (state, actions) => {
      return { ...state, longBreak: parseInt(actions.payload) };
    },
    updateAutoStartsBreaks: (state, actions) => {
      return { ...state, autoStartsBreaks: actions.payload };
    },
    updateAutoStartsPomodoro: (state, actions) => {
      return { ...state, autoStartsPomodoro: actions.payload };
    },
    updateLongBreakInterval: (state, actions) => {
      return { ...state, longBreakInterval: parseInt(actions.payload) };
    },
  },
});

export const {
  updatePomodoro,
  updateLongBreak,
  updateShortBreak,
  updateAutoStartsBreaks,
  updateAutoStartsPomodoro,
  updateLongBreakInterval,
} = timerSlice.actions;

export default timerSlice.reducer;
