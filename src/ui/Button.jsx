const Button = ({ buttonContent, arrow = null }) => {
  const icon = arrow === null ? null : <img className="w-3 h-3" src={arrow} />;

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
        flex
        gap-2
        items-center
        self-center
      "
    >
      {buttonContent}

      {icon}
    </button>
  );
};

export default Button;
