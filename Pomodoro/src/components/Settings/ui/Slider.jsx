import { useState } from "react";
import "../styles/rangeInput.css";

function Slider() {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <div className="w-[50%] h-full flex items-center gap-[10px]">
      <div className=" text-thirdTextColor">{sliderValue}</div>
      <input
        className="range-input w-[77%] h-[12px] bg-efGray [&::-webkit-slider-thumb]:bg-thirdTextColor [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:rounder-[50%] [&::-webkit-slider-thumb]:cursor-pointer"
        type="range"
        min="0"
        max="100"
      />
    </div>
  );
}

export default Slider;
