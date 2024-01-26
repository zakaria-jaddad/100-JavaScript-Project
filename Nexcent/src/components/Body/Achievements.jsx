import useEffectAnimation from "../../IntersectionObserver/useEffectAnimation";
import Counts from "./Counts";
import { useState, useRef } from "react";

const Achievements = () => {
  // Initialisation
  const [isAchivementsVisible, setAchivementsVisbile] = useState();

  const achivementsSection = useRef();

  useEffectAnimation({
    myRef: achivementsSection,
    setIsElementVisible: setAchivementsVisbile,
  });

  return (
    <section
      ref={achivementsSection}
      className={`bg-silver py-11 my-9 animation-duration-1500 
                ${isAchivementsVisible ? "animate-fadeInLeft" : ""}`}
      id="pricing"
    >
      <div className="flex justify-around container mx-auto flex-wrap gap-y-8">
        {/* Section Heading */}
        <div
          className="
          w-full sm:w-5/12
          text-center sm:text-left "
        >
          <h2 className="text-secondary text-2xl font-semibold mb-4">
            Helping a local <br />
            <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-line-grey text-sm">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Counts */}
        <div
          className="
          w-full sm:w-5/12
          grid
          grid-cols-2
          gap-y-7
          gap-x-5
        "
        >
          <Counts isAchivementsVisible={isAchivementsVisible} />
        </div>
      </div>
    </section>
  );
};
export default Achievements;
