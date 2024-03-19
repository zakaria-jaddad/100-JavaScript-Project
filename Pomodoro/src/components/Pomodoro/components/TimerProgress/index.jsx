import { useEffect, useState } from "react";

const useProgressBar = (isTimerRunning, timerInSeconds, activeTimerInfo) => {
  const { activeTimer, minutesTimer } = activeTimerInfo;
  const [width, setWidth] = useState(0);
  const [newSecondsWidth, setSecondsWidth] = useState(0);
  const [initialTimer, setInitialTimer] = useState(minutesTimer * 60);

  useEffect(() => {
    setSecondsWidth(100 / (minutesTimer * 60));
  }, []);

  useEffect(() => {
    const setProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      // const stepPerSecond = 100 / (minutesTimer * 60);
      if (isTimerRunning) {
        setWidth((prevWidth) => {
          const newWidth = prevWidth + newSecondsWidth;
          progressBar.style.width = `${newWidth}%`;
          return newWidth;
        });
      }
      return;
    };
    setInitialTimer(minutesTimer * 60);
    setProgressBarWidth();
  }, [timerInSeconds]);

  useEffect(() => {
    const initialProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = "0%";
      setWidth(0);
    };
    initialProgressBarWidth();
  }, [activeTimer]);

  useEffect(() => {
    const updateProgressBarWidth = () => {
      const newSecondsWidth = 100 / (minutesTimer * 60);
      const progressBar = document.getElementById("progress-bar");
      const timeDifferent = (initialTimer - timerInSeconds) % 60;

      // imagin that there is a 10 minutes timer and you have done just take new timer and set width to 0 and substrac how much seconds
      // user have done from the current minutes

      console.log(initialTimer, timerInSeconds);

      progressBar.style.width = `${timeDifferent * newSecondsWidth}%`;
      setWidth(timeDifferent * newSecondsWidth);
      setSecondsWidth(newSecondsWidth);
    };
    if (isTimerRunning) updateProgressBarWidth();
  }, [minutesTimer]);
};

const TimerProgress = ({ isTimerRunning, timerInSeconds, activeTimerInfo }) => {
  useProgressBar(isTimerRunning, timerInSeconds, activeTimerInfo);

  return (
    <div className="w-full h-[1px] mb-[40px] bg-third-text-color flex items-center">
      <div id="progress-bar" className="bg-white h-[3px] rounded-[100px]"></div>
    </div>
  );
};
export default TimerProgress;
