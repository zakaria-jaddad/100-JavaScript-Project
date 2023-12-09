import unlockIllustration from "/images/unlock.svg"
import Illustration from "../../ui/Illustration";
import Button from "../../ui/Button";

const Unlock = () => {
  return (
    // image sesstion
    <div
      className="
        flex
        justify-around
        flex-wrap
        gap-6
        container mx-auto
        my-3
      "
    >
      <Illustration imageSrc={unlockIllustration} imageAlt={'Unlock section Illustration'} />
      
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
          <h2 className=" text-heading-grey font-semibold text-2xl break-words">The unseen of spending three <br /> years at Pixelgrade</h2>
          <p className="text-line-grey text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        </div>

        {/* button  */}
        <Button buttonContent="Learn More"/>
      </div>

    </div>
  );
};

export default Unlock;
