import { useDispatch } from "react-redux";

function TimeInput({ labelContent, update }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-[98px] text-thirdTextColor font-bold mb-[4px] text-[14px]">
      <label htmlFor={labelContent} className="block">
        {labelContent}
      </label>
      <input
        className="p-[10px] rounded-[6px] bg-efGray max-h-[38.5px] focus:outline-none"
        type="number"
        id={labelContent}
        onChange={(e) => {
          dispatch(update(e.target.value));
        }}
      />
    </div>
  );
}

export default TimeInput;
