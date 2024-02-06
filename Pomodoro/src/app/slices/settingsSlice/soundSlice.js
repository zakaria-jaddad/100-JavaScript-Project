import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
  alarmSound: "Hello", // alarmSound Accept only songs paths
  tickingSound: "hello, from tinking sound", // takes tiking sound path also nothing
};

export const soundSlice = createSlice({
  name: "soundSlice",
  initialState,
  reducers: {
    updateAlarmSound: (state, actions) => {
      return { ...state, alarmSound: actions.payload };
    },
  },
});
