import { useState } from "react";
import alarmSongs from "../data/alaram/alarmSoudns";
import DropDownLogo from "/public/icons/settings/drop-down.svg";
import Option from "./Option";

function Select() {
  const [isalarmSongs, setIsAlarmSongs] = useState(false);
  return (
    <div
      className="flex justify-start items-center relative outline-none h-full bg-efGray rounded appearance-none w-[35%] text-sm text-thirdTextColor cursor-pointer"
      onClick={() => {
        isalarmSongs === true ? setIsAlarmSongs(false) : setIsAlarmSongs(true);
      }}
    >
      <DropDownLogo
        color="#000"
        width={20}
        height={20}
        strokeWidth="3"
        className="absolute top-[50%] right-[12px] translate-y-[-50%] text-thirdTextColor"
      />
      {isalarmSongs === true ? (
        <div className="w-full h-full absolute top-[100%] mt-[5px] rounded shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          {alarmSongs.map((alarmSong, index) => {
            return <Option name={alarmSong.name} key={index} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default Select;
