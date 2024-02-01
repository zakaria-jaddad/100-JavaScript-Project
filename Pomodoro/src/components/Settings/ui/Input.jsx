import { useDispatch } from "react-redux";

function Input({ labelContent = null, update, inputValue = "" }) {
  const dispatch = useDispatch();
  /* 
    Settings Input Component
    parameters: 
      - labelContent: string for label 
      - onChange: function updates form values in onChange event
   */
  return (
    <div className="flex flex-col w-[98px] text-thirdTextColor font-bold mb-[4px] text-[14px]">
      {labelContent !== null ? (
        <label htmlFor={labelContent} className="block">
          {labelContent}
        </label>
      ) : null}
      <input
        className="p-[10px] rounded-[6px] bg-efGray max-h-[38.5px] focus:outline-none"
        type="number"

        value={parseInt(inputValue) === 0 ? "" : parseInt(inputValue)}
        id={labelContent}
        onChange={(e) => {
          dispatch(
            update(e.target.value === "" ? 0 : parseInt(e.target.value))
          );
        }}
      />
    </div>
  );
}

export default Input;
