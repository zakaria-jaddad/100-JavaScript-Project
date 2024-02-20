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
    updateActiveTimer: (state, actions) => {
      console.log(actions.payload.e);
      // const newState = { ...state };
      // for (const [key] of Object.entries(newState)) {
      //   if (key == event.target.dataset.timertype) {
      //     newState[key] = true;
      //   } else {
      //     newState[key] = false;
      //   }
      // }
      // return newState;
      return { ...state };
    },
  },
});

export const { updateActiveTimer } = activeTimerSlice.actions;

export default activeTimerSlice.reducer;
