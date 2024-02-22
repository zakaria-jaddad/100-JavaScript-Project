import { useEffect, useState } from "react";

/* 
  Signature: 
    - Interger: 0 -> Array: [ 
        - secondsLeft in the minute, 
        - @fun to set the starting value of seconds 
        - @fun to trigger weather the timer is started or not 
    ]
*/
export default function useSecondsTimer(seconds = 0) {
  const [secondsLeft, setSecondsLeft] = useState(parseInt(seconds));
  const [isTimerRunning, setIsTimerisRunning] = useState(false);

  useEffect(() => {
    let secondsInterval;

    if (isTimerRunning) {
      secondsInterval = setInterval(() => {
        setSecondsLeft(secondsLeft + 1);
      }, 1000);
    }
    return () => clearInterval(secondsInterval);
  }, [secondsLeft, isTimerRunning]);

  // this is an updte function to update the current timer
  function setNewSecondsLeft(newSeconds) {
    setSecondsLeft(newSeconds);
  }

  function setIsTimerRunning(isTimerRunning) {
    setIsTimerisRunning(isTimerRunning);
  }

  // formating secondsLeft
  const result =
    secondsLeft % 60 === 0 ? secondsLeft % 60 : 60 - (secondsLeft % 60);

  return [result, setNewSecondsLeft, setIsTimerRunning];
}
