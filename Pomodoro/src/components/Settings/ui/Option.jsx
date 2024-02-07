import { useDispatch } from "react-redux";

function Option({ name, setValue }) {
  const dispatch = useDispatch();
  return (
    <div
      className="h-full w-full px-[12px] flex items-center capitalize hover:bg-gray-ccc rounded"
      onClick={() => {
        dispatch(setValue);
      }}
    >
      {name}
    </div>
  );
}

export default Option;
