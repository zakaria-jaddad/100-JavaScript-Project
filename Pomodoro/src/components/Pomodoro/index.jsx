import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateActiveTimer } from "../../app/slices/pomodoroSlice/timerSlice";
import useSecondsTimer from "./hooks/useSecondsTimer";
import playSound from "../utils/playSound";
import getCurrentTimer from "./utils/getCurrentTimer";
import clickSound from "/public/sounds/click.mp3";
import goToNextTimer from "./utils/GoToNexTimer";

function Pomodoro() {
  const dispatch = useDispatch();
  const soundInfo = useSelector((state) => state.settings.sound);
  const timerSettings = useSelector((state) => state.settings.timer); // current timer settings
  const timers = useSelector((state) => state.home.timers); // timers Status

  const activeTimer = getCurrentTimer({
    timers: timers,
    timerSettings: timerSettings,
  });
  const [isStart, setIsStart] = useState(false);

  //  show: pomodoro, shortBreak, longBreak own timerSettings.
  const [minutesTimer, setMinutesTimer] = useState();

  useEffect(() => {
    setMinutesTimer(
      getCurrentTimer({
        timers: timers,
        timerSettings: timerSettings,
      })[0]
    );
    setIsStart(false);
    setSecondsTimer(0);
  }, [timers, timerSettings]);

  const [secondsTimer, setSecondsTimer, setIsTimerRunning] = useSecondsTimer(0);

  useEffect(() => {
    if (isStart) {
      setMinutesTimer(secondsTimer === 59 ? minutesTimer - 1 : minutesTimer);
    }
    // timer is done
    if (secondsTimer === 0 && minutesTimer === 0) {
      playSound({
        sound: soundInfo.alarmSound.alarmSound,
        soundVolume: parseInt(soundInfo.alarmSoundVolume) / 100,
      });
      setIsStart(false);
      goToNextTimer({
        timerSettings: timerSettings,
        timers: timers,
        dispatch,
      });
    }
  }, [secondsTimer]);

  useEffect(() => {
    setIsTimerRunning(isStart);
  }, [isStart]);

  return (
    <main className="container text-main-text-color">
      <div className="max-w-[450px] mx-auto">
        <div className="w-[100%] p-[20px_0px_30px] flex gap-[10px] flex-col items-center bg-[rgba(255,_255,_255,_0.1)] rounded-lg mb-[20px]">
          <nav className="flex justify-center items-center gap-[10px] h-[32px]">
            <div
              onMouseDown={(e) => {
                e.target.classList.add("translate-y-[2px]");
              }}
              onMouseUp={(e) => {
                e.target.classList.remove("translate-y-[2px]");
              }}
              onClick={(e) => {
                timers.pomodoro.isActive === false
                  ? dispatch(updateActiveTimer(e.target.dataset.timertype))
                  : null;
              }}
              data-timertype="pomodoro"
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                timers.pomodoro.isActive === true
                  ? "bg-transparent font-bold"
                  : ""
              }`}
            >
              Pomodoro
            </div>
            <div
              onMouseDown={(e) => {
                e.target.classList.add("translate-y-[2px]");
              }}
              onMouseUp={(e) => {
                e.target.classList.remove("translate-y-[2px]");
              }}
              onClick={(e) => {
                timers.shortBreak.isActive === false
                  ? dispatch(updateActiveTimer(e.target.dataset.timertype))
                  : null;
              }}
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                timers.shortBreak.isActive === true
                  ? "bg-transparent font-bold"
                  : ""
              }`}
              data-timertype="shortBreak"
            >
              Short Break
            </div>
            <div
              onMouseDown={(e) => {
                e.target.classList.add("translate-y-[2px]");
              }}
              onMouseUp={(e) => {
                e.target.classList.remove("translate-y-[2px]");
              }}
              onClick={(e) => {
                timers.longBreak.isActive === false
                  ? dispatch(updateActiveTimer(e.target.dataset.timertype))
                  : null;
              }}
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                timers.longBreak.isActive === true
                  ? "bg-transparent font-bold"
                  : ""
              }`}
              data-timertype="longBreak"
            >
              Long Break
            </div>
          </nav>

          <section className="text-[100px] font-semibold text-white tracking-wider">
            {`${minutesTimer}:${
              secondsTimer >= 0 && secondsTimer < 10
                ? `0${secondsTimer}`
                : secondsTimer
            }`}
          </section>

          <div
            onClick={() => {
              setIsStart(!isStart);
              playSound({ sound: clickSound, soundVolume: 1 });
            }}
            className={`rounded bg-white text-main-bg-color text-[22px] px-[12px] font-bold h-[55px] w-[200px] flex items-center justify-center uppercase cursor-pointer transition-colors duration-300 shadow-button-shadow
                ${isStart === true ? " shadow-none translate-y-[6px]" : ""}`}
          >
            {isStart === false ? "start" : "pause"}
          </div>
        </div>

        {/* counter */}
        <div className="text-main-text-color flex flex-col items-center gap-[5px]">
          <div className="tracking-[2px]">
            #{timers[activeTimer[1]].counter}
          </div>
          <div>Time for somting...</div>
        </div>
      </div>
    </main>
  );
}

export default Pomodoro;
