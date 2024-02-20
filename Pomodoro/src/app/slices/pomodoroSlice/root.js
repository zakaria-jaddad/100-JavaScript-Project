import activeTimerReducer from "./activeTimer";
import { combineReducers } from "@reduxjs/toolkit";

const homeReducer = combineReducers({
  pomodoro: activeTimerReducer, 
});


export default homeReducer;