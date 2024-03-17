import { useEffect, useState } from "react";
import getCurrentTimerInfo from "../../utils/getCurrentTimerInfo";

const useProgressBar = (isTimerRunning, timerInSeconds, activeTimerInfo) => {
  const { activeTimer, minutesTimer } = activeTimerInfo;

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const setProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      const stepPerSecond = 100 / (minutesTimer * 60);
      if (isTimerRunning) {
        setWidth((prevWidth) => {
          const newWidth = prevWidth + stepPerSecond;
          progressBar.style.width = `${newWidth}%`;
          return newWidth;
        });
      }
      return;
    };
    setProgressBarWidth();
  }, [timerInSeconds]);

  useEffect(() => {
    const initialProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = 0;
      setWidth(0);
    };
    initialProgressBarWidth();
  }, [activeTimer]);

  useEffect(() => {
    const updateProgressBarWidth = () => {
      const progressBar = document.getElementById("progress-bar");
      const initilTimer = minutesTimer * 60;
      const currentTimer = timerInSeconds;

      const different = initilTimer - currentTimer;
      if (different < 0) {
      }
    };
    updateProgressBarWidth();
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
