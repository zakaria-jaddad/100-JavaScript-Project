import { useEffect, useState } from "react";
import getCurrentTimerInfo from "../../utils/getCurrentTimerInfo";
import { current } from "@reduxjs/toolkit";

const useProgressBar = (isTimerRunning, timerInSeconds, activeTimerInfo) => {
  const { activeTimer, minutesTimer } = activeTimerInfo;
  const [width, setWidth] = useState(0);
  const [secondsWidth, setSecondsWidth] = useState(0);
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
          const newWidth = prevWidth + secondsWidth;
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
      // useTimerInSeconds...
      const progressBar = document.getElementById("progress-bar");
      const progress = ((initialTimer - timerInSeconds) * 100) / minutesTimer;

      const timerDifferent = minutesTimer * 60 - initialTimer;

      console.log(
        initialTimer,
        timerInSeconds,
        progress,
        secondsWidth,
        progress * secondsWidth
      );

      setWidth((prevWidth) => {
        const newWidth = prevWidth - progress * secondsWidth;
        console.log("Hello");
        progressBar.style.width = `${
          parseInt(progressBar.style.width) - progress * secondsWidth
        }%`;
        setSecondsWidth(100 / (minutesTimer * 60));
        return newWidth;
      });
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
