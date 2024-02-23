/* 
  @Signature 
    Object -> Int

  @Porupuse
    returns the value of the activeTimer such pomodor, shortBreak or LongBreak
    using the value of each timer from the timer wich has all duration of each timer 
    ! show activeTimer timer 
*/
export default function useShowTimer({ activeTimer, timer }) {
  for (const timerType of Object.entries(activeTimer)) {
    if (timerType[1].isActive === true) {
      return timer[timerType[0]];
    }
  }
}
