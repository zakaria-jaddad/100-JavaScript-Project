/* 
    @Event, @func setState -> Object 
    @Porpuse
      - Takes current Button Event and returns a new new object that has teh button 
        value in the obejct true and the other false 
  */
function useSetActiveTimer({ event, setState }) {
  setState((prevState) => {
    const newState = { ...prevState };
    for (const [key] of Object.entries(newState)) {
      if (key == event.target.dataset.timertype) {
        newState[key] = true;
      } else {
        newState[key] = false;
      }
    }
    return newState;
  });
}

export default useSetActiveTimer;