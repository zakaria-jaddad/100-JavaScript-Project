import settingsPageReducer from "./settingsPageSlice";
import timerReducer from "./timerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const settingsReducer = combineReducers({
  settingsPage: settingsPageReducer,
  timer: timerReducer,
});

export default settingsReducer;
