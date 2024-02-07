import settingsPageReducer from "./settingsPageSlice";
import timerReducer from "./timerSlice";
import soundReducer from "./soundSlice";
import { combineReducers } from "@reduxjs/toolkit";

const settingsReducer = combineReducers({
  settingsPage: settingsPageReducer,
  timer: timerReducer,
  sound: soundReducer,
});

export default settingsReducer;
