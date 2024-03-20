import { useEffect, useState } from "react";

const useProgressBar = (timerInSeconds, activeTimerInfo) => {
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
      setWidth((prevWidth) => {
        const newWidth = prevWidth + newSecondsWidth;
        progressBar.style.width = `${newWidth}%`;
        return newWidth;
      });
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

      progressBar.style.width = `${timeDifferent * newSecondsWidth}%`;
      setWidth(timeDifferent * newSecondsWidth);
      setSecondsWidth(newSecondsWidth);
    };
    updateProgressBarWidth();
  }, [minutesTimer]);
};

export default useProgressBar;