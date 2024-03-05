import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Input({ labelContent = null, updateInputValue, inputValue = "" }) {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(true);
  const [currentInputValue, setCurrentInputValue] = useState(inputValue);

  useEffect(() => {
    if (currentInputValue != "" || currentInputValue != 0) {
      dispatch(updateInputValue(currentInputValue));
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [currentInputValue]);

  return (
    <div
      style={{ overflowWrap: "break-word" }}
      className="flex flex-col xsm:w-[98px] w-[55px] text-third-text-color font-bold mb-[4px] text-[14px]"
    >
      {labelContent !== null ? (
        <label htmlFor={labelContent} className="block">
          {labelContent}
        </label>
      ) : null}
      <input
        data-valid={isValid}
        className="p-[10px] rounded-[6px] bg-efGray max-h-[38.5px] focus:outline-none data-[valid=false]:focus:outline-red-300"
        type="number"
        value={parseInt(currentInputValue)}
        id={labelContent}
        min="1"
        onChange={(e) => {
          setCurrentInputValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
