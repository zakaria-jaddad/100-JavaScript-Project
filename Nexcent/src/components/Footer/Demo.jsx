import arrowDown from "/images/arrow-right-white.svg"
import Button from "../../ui/Button";

const Demo = () => {
  return (
    <div
      className="
      py-6
      flex
      flex-col
      justify-center
      items-center
      bg-silver
    "
    >
      <h2
        className="
      w-full md:w-[617px]
      text-[44px]
      leading-[52px]
      font-semibold
      text-center
      mb-[22px]
      text-secondary
    "
      >
        Pellentesque suscipit fringilla libero eu.
      </h2>

      {/* button  */}
      <Button buttonContent="Get a Demo" arrow={arrowDown} />
    </div>
  );
};

export default Demo;
// this is just a comment using vim fir the first time 
