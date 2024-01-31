import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pomodoro: 0,
  shortBreak: 0,
  longBreak: 0,
  autoStartsBreaks: false
};

export const timerSlice = createSlice({
  name: "timerSlice",
  initialState: initialState,
  reducers: {
    // TODO: Load additional state from localStorage if available
    updatePomodoro: (state, actions) => {
      console.log(actions.payload);
      return { ...state, pomodoro: parseInt(actions.payload) };
    },
    updateShortBreak: (state, actions) => {
      return { ...state, shortBreak: parseInt(actions.payload) };
    },
    updateLongBreak: (state, actions) => {
      return { ...state, longBreak: parseInt(actions.payload) };
    },
    updateAutoStartsBreaks: (state, actions) => {
      return {...state, autoStartsBreaks: actions.payload}
    }
  },
});

export const { updatePomodoro, updateLongBreak, updateShortBreak, updateAutoStartsBreaks } =
  timerSlice.actions;

export default timerSlice.reducer;
