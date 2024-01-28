import { hide } from "../../../app/slices/settingsSlice";
import Closelogo from "/public/icons/header/close.svg";
import { useSelector, useDispatch } from "react-redux";
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
        rounded-[8px] p-[16px_23px]
      "
      >
        <div className="flex items-center justify-center text-center h-[50px] w-full relative">
          <span className="block text-xl font-semibold tracking-[2px]">
            Settings
          </span>
          <div className="text-secondTextColor absolute top-[50%] translate-y-[-50%] right-0 cursor-pointer">
            <Closelogo
              height={18}
              width={18}
              strokeWidth="4"
              onClick={() => {
                dispatch(hide());
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Settings;
