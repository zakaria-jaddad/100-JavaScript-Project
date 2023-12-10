import Illustration from "../../ui/Illustration";
import Button from "../../ui/Button";


const Unlock = ({ unlockIllustration, heading, subHeading }) => {
  return (
    // image sesstion
    <div
      className="
        flex
        justify-around
        flex-wrap
        gap-6
        container mx-auto
        my-9
        px-4 md:px-0
      "
    >
      <Illustration imageSrc={unlockIllustration} imageAlt='Illustration' illustrationSyle={{'height': '301px', 'width': '320px'}} />
      
      {/* Unlock content */}
      <div
        className="
          flex
          flex-col
          justify-center
          gap-4
          w-full lg:w-480
          px-2 lg:px-0
        ">

        <div
          className="
            flex
            flex-col
            gap-3
            text-center lg:text-left
          "
        >
          <h2 className=" text-heading-grey font-semibold text-2xl break-words w-11/12"> {heading} </h2>
          <p className="text-line-grey text-xs"> {subHeading} </p>
        </div>

        {/* button  */}
        <Button buttonContent='Learn More'/>
      </div>

    </div>
  );
};

export default Unlock;
