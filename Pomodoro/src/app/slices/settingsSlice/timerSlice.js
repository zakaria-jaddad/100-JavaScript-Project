import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 0,
  shortBreak: 0,
  longBreak: 0,
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
  },
});

export const { updatePomodoro, updateLongBreak, updateShortBreak } =
  timerSlice.actions;

export default timerSlice.reducer;
