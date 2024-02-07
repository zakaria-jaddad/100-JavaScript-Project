import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
  alarmSong: {
    name: "",
    songPath: "",
  }, // alarmSound Accept only songs paths
  tickingSound: "hello, from tinking sound", // takes tiking sound path also nothing
};

export const soundSlice = createSlice({
  name: "soundSlice",
  initialState,
  reducers: {
    updateAlarmSound: (state, actions) => {
      console.log(actions.payload);
      return { ...state, alarmSong: { ...actions.payload } };
    },
  },
});

export const { updateAlarmSound } = soundSlice.actions;

export default soundSlice.reducer;
