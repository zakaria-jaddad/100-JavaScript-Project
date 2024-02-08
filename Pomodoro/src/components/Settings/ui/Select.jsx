import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDownLogo from "/public/icons/settings/drop-down.svg";
import Option from "./Option";
import { updateAlarmSound } from "../../../app/slices/settingsSlice/soundSlice";
import alarmSounds from "../data/alaram/alarmSoudns";

function Select() {
  const sound = useSelector((state) => state.settings.sound);
  const [isalarmSound, setIsAlarmSound] = useState(false);

  return (
    <div
      className="flex justify-start items-center relative outline-none h-[42px] bg-efGray rounded appearance-none w-[35%] text-sm text-thirdTextColor cursor-pointer"
      onClick={() => {
        isalarmSound === true ? setIsAlarmSound(false) : setIsAlarmSound(true);
      }}
    >
      <DropDownLogo
        width={20}
        height={20}
        strokeWidth="3"
        className="absolute top-[50%] right-[12px] translate-y-[-50%] text-thirdTextColor"
      />
      <div className="w-full h-full flex items-center px-[12px] capitalize">
        {sound.alarmSound.name}
      </div>

      {isalarmSound === true ? (
        <div className="w-full h-fit absolute top-[100%] mt-[5px] rounded shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-efGray">
          {alarmSounds.map((alarmSound, index) => {
            return (
              <Option
                name={alarmSound.name}
                key={index}
                setValue={updateAlarmSound({
                  name: alarmSound.name,
                  soundPath: alarmSound.path,
                })}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Select;
