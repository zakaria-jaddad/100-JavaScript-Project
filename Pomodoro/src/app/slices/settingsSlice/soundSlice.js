import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage, { GET_DATA } from "../../../hooks/useLocalStorage";
import saveDataToLocalStorage from "../../util/saveDataTolocalStorage";

const KEY = "sound";

const initialState = useLocalStorage({
  key: KEY,
  type: GET_DATA,
  value: {
    alarmSound: {
      name: "twitch",
      soundPath: "/public/sounds/twitch.mp3",
    }, // alarmSound Accept only songs paths
    alarmSoundVolume: 50,
  },
});

export const soundSlice = createSlice({
  name: "soundSlice",
  initialState,
  reducers: {
    updateAlarmSound: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        alarmSound: { ...actions.payload },
      });
      return { ...state, alarmSound: { ...actions.payload } };
    },
    updateAlarmSoundValume: (state, actions) => {
      saveDataToLocalStorage(KEY, {
        ...state,
        alarmSoundVolume: parseInt(actions.payload),
      });
      return { ...state, alarmSoundVolume: parseInt(actions.payload) };
    },
  },
});

export const { updateAlarmSound, updateAlarmSoundValume } = soundSlice.actions;

export default soundSlice.reducer;
