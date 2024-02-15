import Closelogo from "/public/icons/header/close.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePage } from "../../app/slices/settingsSlice/settingsPageSlice";
import Timer from "./components/Timer";
import Sound from "./components/Sound";
import Theme from "./components/Theme";
import Integration from "./components/Integration";

function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);

  return (
    <section className="absolute inset-0 w-screen z-10 bg-lowTransparent text-main-text-color flex justify-center items-center overflow-y-scroll ">
      <div className="min-w-[400px] mx-auto bg-white text-second-text-color rounded-[8px] absolute top-[69px] mb-[30px]">
        {/* Title */}
        <div className="flex items-center justify-center text-center h-[50px] w-full relative text-third-text-color border-b border-eGray p-[37px_23px]">
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
          <form>
            <Timer />
            <Sound />
            <Theme />
            <Integration />
          </form>
        </main>
        <div className="flex items-center justify-end text-center h-[50px] w-full relative border-b border-eGray p-[17px_23px_37px]">
          <div
            className="flex items-center justify-center w-[70px] h-[36px] bg-main-bg-color text-white uppercase font-bold rounded cursor-pointer opacity-90 hover:opacity-100 transition-all duration-300"
            onClick={() => {
              dispatch(hidePage());
            }}
          >
            ok
          </div>
        </div>
      </div>
    </section>
  );
}
export default Settings;
