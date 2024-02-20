/* 
  @Signature 
    Object -> Int

  @Porupuse
    returns the value of the activeTimer such pomodor, shortBreak or LongBreak
    using the value of each timer from the timer wich has all duration of each timer 
*/
export default function useShowTimer({ activeTimer, timer }) {
  for (const [key, value] of Object.entries(activeTimer)) {
    if (value === true) {
      return timer[key];
    }
  }
}
