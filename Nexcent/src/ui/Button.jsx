const Button = ({buttonContent}) => {
  return (
    <button
      className="
  mt-4
  w-fit
  py-3
  px-6
  bg-green-600
  text-gray-50
  rounded-sm
  self-center lg:self-start
"
    >
      {buttonContent}
    </button>
  );
};

export default Button;
