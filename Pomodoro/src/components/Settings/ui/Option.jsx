function Option({ name }) {
  return (
    <div className="h-full w-full px-[12px] flex items-center capitalize bg-white hover:bg-gray-ccc">
      {name}
    </div>
  );
}

export default Option;
