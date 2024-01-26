import { useRef, useEffect, useState } from "react";
import communityupdates from "../data/communityupdates";
import Illustration from "./Illustration";
import arrowRight from "/images/arrow-right.svg";
import useEffectAnimation from "../IntersectionObserver/useEffectAnimation";


const CommunityUpdateFrame = ({
  imageSrc,
  imageAlt,
  heading,
  animationDuration = 1500,
}) => {

  let [frameIsVisible, setFrameIsVisible] = useState()
  const myRef = useRef()

  useEffectAnimation({myRef: myRef, setIsElementVisible: setFrameIsVisible})
  return (
    <div
      ref={myRef}
      className={`
        flex
        flex-col
        justify-center
        items-center
        animation-duration-${animationDuration}
        ${frameIsVisible ? "animate-fadeInLeft" : ''}
      `}
    >
      {/* image */}
      <Illustration
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        illustrationStyle={undefined}
      />

      <div
        className="
        text-center
        flex
        flex-col
        gap-y-3
        justify-center
        items-center
        bg-silver
        rounded-lg
        p-3
        shadow-xl
        translate-y-[-50px]
      "
      >
        <h3
          className="
          text-line-grey
          text-sm
          font-semibold
          w-[200px]
        "
        >
          {heading}
        </h3>

        <a
          className="
          flex
          flex-row
          justify-center
          items-center
          gap-2
        "
          href="#"
        >
          <span
            className="
            text-primary
            block
            text-sm
          "
          >
            Read More
          </span>
          <div>
            <img src={arrowRight} alt="arrow-rigth" />
          </div>
        </a>
      </div>
    </div>
  );
};

const CommunityUpdateFrames = () => {
  let animationDuration = 0;

  return communityupdates.map((communityupdate) => {
    animationDuration += 1500;
    return (
      <CommunityUpdateFrame
        {...communityupdate}
        animationDuration={animationDuration}
      />
    );
  });
};

export default CommunityUpdateFrames;
