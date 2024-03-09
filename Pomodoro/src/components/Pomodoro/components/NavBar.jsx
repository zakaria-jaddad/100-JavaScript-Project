import { useDispatch, useSelector } from "react-redux";
import { updateActiveTimer } from "../../../app/slices/pomodoroSlice/timerSlice";
import { useEffect, useState } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const timers = useSelector((state) => state.home.timers); // timers Status
  function setActiveTimer(event) {
    dispatch(updateActiveTimer(event.target.dataset.timertype));
  }
  // width 367px.

  const [documentWidth, setDocumentWidth] = useState(
    document.documentElement.offsetWidth
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDocumentWidth(document.documentElement.offsetWidth);
    });
  }, [documentWidth]);

  return (
    <nav className="flex justify-center items-center gap-[10px] h-[32px] w-[100%] px-[10px]">
      <div
        onMouseDown={(e) => {
          e.target.classList.add("translate-y-[2px]");
        }}
        onMouseUp={(e) => {
          e.target.classList.remove("translate-y-[2px]");
        }}
        onClick={(e) => {
          timers.pomodoro.isActive === false ? setActiveTimer(e) : null;
        }}
        data-timertype="pomodoro"
        className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
          timers.pomodoro.isActive === true ? "bg-transparent font-bold" : ""
        }`}
      >
        {documentWidth > 367 ? "Pomodoro" : "Pomo"}
      </div>
      <div
        onMouseDown={(e) => {
          e.target.classList.add("translate-y-[2px]");
        }}
        onMouseUp={(e) => {
          e.target.classList.remove("translate-y-[2px]");
        }}
        onClick={(e) => {
          timers.shortBreak.isActive === false ? setActiveTimer(e) : null;
        }}
        className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
          timers.shortBreak.isActive === true ? "bg-transparent font-bold" : ""
        }`}
        data-timertype="shortBreak"
      >
        {documentWidth > 367 ? "Short Break" : "Short"}
      </div>
      <div
        onMouseDown={(e) => {
          e.target.classList.add("translate-y-[2px]");
        }}
        onMouseUp={(e) => {
          e.target.classList.remove("translate-y-[2px]");
        }}
        onClick={(e) => {
          timers.longBreak.isActive === false ? setActiveTimer(e) : null;
        }}
        className={`px-[10px] h-[90%] flex items-center cursor-pointer transition duration-150 rounded ${
          timers.longBreak.isActive === true ? "bg-transparent font-bold" : ""
        }`}
        data-timertype="longBreak"
      >
        {documentWidth > 367 ? "Long Break" : "Long"}
      </div>
    </nav>
  );
};
export default NavBar;
