import { useEffect, useState } from "react";
import useSetActiveTimer from "./hooks/useSetActiveTimer";
import { useSelector } from "react-redux";
import useShowTimer from "../../hooks/useShowTimer";

function Pomodoro() {
  const timer = useSelector((state) => state.settings.timer);
  const [activeTimer, setActiveTimer] = useState({
    pomodoro: true,
    shortBreak: false,
    longBreak: false,
  });

  useEffect(() => {
    useShowTimer({ activeTimer: activeTimer, timer: timer });
  }, [activeTimer]);

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
                  ? useSetActiveTimer({ event: e, setState: setActiveTimer })
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
                  ? useSetActiveTimer({ event: e, setState: setActiveTimer })
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
                  ? useSetActiveTimer({ event: e, setState: setActiveTimer })
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
            {`${useShowTimer({ activeTimer: activeTimer, timer: timer })}:00`}
          </section>

          <div className="rounded bg-white text-main-bg-color text-[22px] px-[12px] font-bold h-[55px] w-[200px] flex items-center justify-center uppercase cursor-pointer transition-colors duration-300 shadow-button-shadow hover:shadow-none hover:translate-y-[6px]">
            start
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
