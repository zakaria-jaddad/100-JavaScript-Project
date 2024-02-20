import { useEffect, useState } from "react";
import useSetActiveTimer from "./hooks/useSetActiveTimer";

function Pomodoro() {
  const [navBar, setNavBar] = useState({
    pomodoro: false,
    shortBreak: false,
    longBreak: false,
  });
  useEffect(() => {
    
  }, [])

  return (
    <main className="container text-main-text-color">
      <div className="max-w-[450px] mx-auto">
        <div className="w-[100%] p-[20px_0px_30px] flex gap-[10px] flex-col items-center bg-[rgba(255,_255,_255,_0.1)] rounded-lg mb-[20px]">
          <nav className="flex justify-center items-center gap-[10px] h-[32px]">
            <div
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                navBar.pomodoro === true ? "bg-transparent font-bold" : ""
              }`}
              onMouseDown={(e) => {
                e.target.classList.add("translate-y-[2px]");
              }}
              onMouseUp={(e) => {
                e.target.classList.remove("translate-y-[2px]");
              }}
              onClick={(e) => {
                navBar.pomodoro === false
                  ? useSetActiveTimer({ event: e, setState: setNavBar })
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
                navBar.shortBreak === false
                  ? useSetActiveTimer({ event: e, setState: setNavBar })
                  : null;
              }}
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                navBar.shortBreak === true ? "bg-transparent font-bold" : ""
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
                navBar.longBreak === false
                  ? useSetActiveTimer({ event: e, setState: setNavBar })
                  : null;
              }}
              className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
                navBar.longBreak === true ? "bg-transparent font-bold" : ""
              }`}
              data-timertype="longBreak"
            >
              Long Break
            </div>
          </nav>

          <section className="text-[100px] font-semibold text-white tracking-wider">
            01:11
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
