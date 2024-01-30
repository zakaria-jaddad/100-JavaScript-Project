import SubTitle from "./components/Subtitle";
import TimeInput from "./components/TimeInput";
import Closelogo from "/public/icons/header/close.svg";
import WatchLogo from "/public/icons/settings/watch.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePage } from "../../app/slices/settingsSlice/settingsPageSlice";

function Settings() {
  const timer = useSelector((state) => state.settings.timer);
  const [timerForm, setTimerForm] = useState({ ...timer });

  useEffect(() => {
  }, [timer, timerForm]);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const eventValue = e.target.value;
    const eventName = e.target.name;

    /* 
      logic: To Update timer
      if NaN switch to 0
     */
    setTimerForm((prevTimer) => ({
      ...prevTimer,
      [eventName]: Number.isNaN(parseInt(eventValue)) ? 0 : parseInt(eventValue),
    }));
  };

  return (
    <section
      className="absolute inset-0 w-screen h-screen z-10 
    bg-lowTransparent text-mainTextColor
      flex justify-center items-center
    "
    >
      <div
        className="min-w-[400px] h-screen mx-auto bg-white text-secondTextColor translate-y-[80px]
        rounded-[8px] 
      "
      >
        {/* Title */}
        <div className="flex items-center justify-center text-center h-[50px] w-full relative text-thirdTextColor border-b border-eGray p-[37px_23px]">
          <span className="block font-semibold tracking-[1px]">Settings</span>
          <div className="absolute top-[50%] translate-y-[-50%] right-[23px] cursor-pointer">
            <Closelogo
              height={18}
              width={18}
              strokeWidth="4"
              onClick={() => {
                dispatch(hidePage());
              }}
            />
          </div>
        </div>

        {/* Main */}
        <main className="px-[23px]">
          <SubTitle title="Timer">
            <WatchLogo width={25} height={25} strokeWidth="2" />
          </SubTitle>

          {/* Time */}
          <div className="py-[12px]">
            <span className="block text-secondTextColor font-semibold">
              Time minutes
            </span>
            <div className="flex justify-between mt-[10px]">
              <TimeInput
                labelContent="Pomodoro"
                onChange={handleInputChange}
                name="pomodoro"
              />
              <TimeInput
                labelContent="Short Break"
                onChange={handleInputChange}
                name="shortBreak"
              />
              <TimeInput
                labelContent="Long Break"
                onChange={handleInputChange}
                name="longBreak"
              />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
export default Settings;
