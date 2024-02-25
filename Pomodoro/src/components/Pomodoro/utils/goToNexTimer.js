import getCurrentTimer from "./getCurrentTimer";
import * as updateTimer from "../../../app/slices/pomodoroSlice/timerSlice";

/* 
  Signature: 
    Object
      -> func: dispatch
      -> timerSettings: Global State Variable Has Settings Of Timer Such time of pomodoro, breaks and autoStart timers...
      -> timers: Global State Variabls Has timers Information such isActive and counter 
      
  Porpuse: 
    set next timer type and increment active timer counter by one 
*/
function goToNextTimer({ dispatch, timerSettings, timers }) {
  // get active timer
  const CurrentActiveTimer = getCurrentTimer({
    timers: timers,
    timerSettings: timerSettings,
  })[1];

  const activeTimerCounter = timers[CurrentActiveTimer].counter;

  switch (CurrentActiveTimer) {
    case "pomodoro":
      // no long Break after pomodoro
      if (activeTimerCounter % timerSettings.longBreakInterval !== 0) {
        dispatch(updateTimer.updateActiveTimer("shortBreak"));
      }
      // long Break after pomodoro
      else if (activeTimerCounter % timerSettings.longBreakInterval === 0) {
        dispatch(updateTimer.updateActiveTimer("longBreak"));
      }
      // increment value of pomodoro timer
      dispatch(updateTimer.updatePomodoroTimerCounter(activeTimerCounter + 1));
      break;
    case "shortBreak":
      dispatch(
        updateTimer.updateShortBreakTimerCounter(activeTimerCounter + 1)
      );
      dispatch(updateTimer.updateActiveTimer("pomodoro"));
      break;
    case "longBreak":
      dispatch(updateTimer.updateLongBreakTimerCounter(activeTimerCounter + 1));
      dispatch(updateTimer.updateActiveTimer("pomodoro"));
      break;
    default:
      console.log("Unexpacted Active Timer", CurrentActiveTimer);
      break
  }
}

export default goToNextTimer;
