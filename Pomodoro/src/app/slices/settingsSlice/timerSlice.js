import { createSlice } from "@reduxjs/toolkit";
import saveDataToLocalStorage from "../../util/saveDataTolocalStorage";
import useLocalStorage, { GET_DATA } from "../../../hooks/useLocalStorage";

const KEY = "timer";
const initialState = useLocalStorage({
  key: KEY,
  type: GET_DATA,
  value: {
    pomodoro: 20,
    shortBreak: 10,
    longBreak: 0,
    autoStartsBreaks: false,
    autoStartsPomodoro: false,
    longBreakInterval: 4,
  },
});

export const timerSlice = createSlice({
  name: "timerSlice",
  initialState: initialState,
  reducers: {
    updatePomodoro: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        pomodoro: parseInt(actions.payload),
      });
      return { ...state, pomodoro: parseInt(actions.payload) };
    },
    updateShortBreak: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        shortBreak: parseInt(actions.payload),
      });
      return { ...state, shortBreak: parseInt(actions.payload) };
    },
    updateLongBreak: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        longBreak: parseInt(actions.payload),
      });
      return { ...state, longBreak: parseInt(actions.payload) };
    },
    updateAutoStartsBreaks: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        autoStartsBreaks: actions.payload,
      });
      return { ...state, autoStartsBreaks: actions.payload };
    },
    updateAutoStartsPomodoro: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        autoStartsPomodoro: actions.payload,
      });
      return { ...state, autoStartsPomodoro: actions.payload };
    },
    updateLongBreakInterval: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        longBreakInterval: parseInt(actions.payload),
      });
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
