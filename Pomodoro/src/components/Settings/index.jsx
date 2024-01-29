import SubTitle from "./components/Subtitle";
import TimeInput from "./components/TimeInput";
import Closelogo from "/public/icons/header/close.svg";
import WatchLogo from "/public/icons/settings/watch.svg";
import { useDispatch } from "react-redux";
import { hidePage } from "../../app/slices/settingsSlice/settingsPageSlice";
import { updatePomodoro, updateShortBreak, updateLongBreak } from "../../app/slices/settingsSlice/timerSlice";

function Settings() {
  const dispatch = useDispatch();
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
              <TimeInput labelContent="Pomodoro" update={updatePomodoro} />
              <TimeInput labelContent="Short Break" update={updateShortBreak}/>
              <TimeInput labelContent="Long Break" update={updateLongBreak}/>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
export default Settings;
