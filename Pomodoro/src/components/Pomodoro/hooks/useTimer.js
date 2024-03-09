import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCurrentTimerInfo from "../utils/getCurrentTimerInfo";
import goToNextTimer from "../utils/GoToNexTimer";
import playSound from "../../utils/playSound";

function secondsToTimer(seconds) {
  return seconds % 60 === 0 ? seconds % 60 : 60 - (seconds % 60);
}

/* 
  This Hook is complicated so i need to break it down
  This Hook make a Timer
*/
export default function useTimer(seconds = 0) {
  const dispatch = useDispatch();
  const soundInfo = useSelector((state) => state.settings.sound);
  const timerSettings = useSelector((state) => state.settings.timer); // current timer settings
  const timers = useSelector((state) => state.home.timers); // timers Status

  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [minutesTimer, setMinutesTimer] = useState();
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let secondsInterval;
    if (isTimerRunning) {
      secondsInterval = setInterval(() => {
        setSecondsLeft((prevSecondsLeft) => {
          return prevSecondsLeft + 1;
        });
      }, 1000);
    }
    return () => clearInterval(secondsInterval);
  }, [secondsLeft, isTimerRunning]);

  useEffect(() => {
    setIsTimerRunning(isTimerRunning);
  }, [isTimerRunning]);

  useEffect(() => {
    setMinutesTimer(
      getCurrentTimerInfo({
        timers: timers,
        timerSettings: timerSettings,
      })[0]
    );
    setIsTimerRunning(false);
    setSecondsLeft(0);
  }, [timers]);

  useEffect(() => {
    if (isTimerRunning) {
      setMinutesTimer(
        secondsToTimer(secondsLeft) === 59 ? minutesTimer - 1 : minutesTimer
      );
    }
    // timer is done
    if (secondsToTimer(secondsLeft) === 0 && minutesTimer === 0) {
      playSound({
        sound: soundInfo.alarmSound.alarmSound,
        soundVolume: parseInt(soundInfo.alarmSoundVolume) / 100,
      });
      setIsTimerRunning(false);
      goToNextTimer({
        timerSettings: timerSettings,
        timers: timers,
        dispatch,
      });
    }
  }, [secondsLeft]);

  return {
    seconds: {
      secondsLeft: secondsToTimer(secondsLeft),
      setSecondsLeft,
    },
    minutes: {
      minutesTimer,
      setMinutesTimer,
    },
    timerStatus: {
      isTimerRunning,
      setIsTimerRunning,
    },
  };
}
