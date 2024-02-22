import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateActiveTimer } from "../../app/slices/pomodoroSlice/activeTimer";
import clickSound from "/public/sounds/click.mp3";
import useShowTimer from "../../hooks/useShowTimer";
import useSecondsTimer from "./hooks/useSecondsTimer";

function playSound(audio) {
  const myAudio = new Audio(audio);
  myAudio.volume = 1;
  myAudio.play();
}

function Pomodoro() {
  const timer = useSelector((state) => state.settings.timer);
  const activeTimer = useSelector((state) => state.home.pomodoro);

  const dispatch = useDispatch();
  const [isStart, setIsStart] = useState(false);

  //  show: pomodoro, shortBreak, longBreak own timer.
  const [minutesTimer, setMinutesTimer] = useState(
    useShowTimer({ activeTimer: activeTimer, timer: timer })
  );
  useEffect(() => {
    setMinutesTimer(useShowTimer({ activeTimer: activeTimer, timer: timer }));
    setIsStart(false);
    setSecondsTimer(0);
  }, [activeTimer]);

  const [secondsTimer, setSecondsTimer, setIsTimerRunning] = useSecondsTimer(0);
  useEffect(() => {
    setIsTimerRunning(isStart);
  }, [isStart]);

  return (
    <main className="container text-main-text-color">
      <div className="max-w-[450px] mx-auto">
        <div className="w-[100%] p-[20px_0px_30px] flex gap-[10px] flex-col items-center bg-[rgba(255,_255,_255,_0.1)] rounded-lg mb-[20px]">
          <nav className="flex justify-center items-center gap-[10px] h-[32px]">
            <div
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                activeTimer.pomodoro === true ? "bg-transparent font-bold" : ""
              }`}
              onMouseDown={(e) => {
                e.target.classList.add("translate-y-[2px]");
              }}
              onMouseUp={(e) => {
                e.target.classList.remove("translate-y-[2px]");
              }}
              onClick={(e) => {
                activeTimer.pomodoro === false
                  ? dispatch(updateActiveTimer(e.target.dataset.timertype))
                  : null;
              }}
              data-timertype="pomodoro"
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
                activeTimer.shortBreak === false
                  ? dispatch(updateActiveTimer(e.target.dataset.timertype))
                  : null;
              }}
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                activeTimer.shortBreak === true
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
                activeTimer.longBreak === false
                  ? dispatch(updateActiveTimer(e.target.dataset.timertype))
                  : null;
              }}
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                activeTimer.longBreak === true ? "bg-transparent font-bold" : ""
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
              playSound(clickSound);
            }}
            className={`rounded bg-white text-main-bg-color text-[22px] px-[12px] font-bold h-[55px] w-[200px] flex items-center justify-center uppercase cursor-pointer transition-colors duration-300 shadow-button-shadow
                ${isStart === true ? " shadow-none translate-y-[6px]" : ""}`}
          >
            {isStart === false ? "start" : "pause"}
          </div>
        </div>

        {/* counter */}
        <div className=" text-main-text-color flex flex-col items-center gap-[5px] ">
          <div>#po4h5</div>
          <div>Time for somting...</div>
        </div>
      </div>
    </main>
  );
}

export default Pomodoro;
