import HeroMainImage from "../../assets/hero-image.svg";
import Illustration from "../../ui/Illustration";
import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section
      className="
      bg-slate-100
      "
    >
      <div
        className="
        container mx-auto px-6
      "
      >
        <div
          className="
        flex 
        justify-around
        items-center
        flex-wrap
        gap-10 lg:gap-28 
        py-16
        relative
        h-full
      "
        >
          {/* content */}
          <div
            className="
          flex
          flex-col
          gap-3
          text-center lg:text-left
        "
          >
            <h1
              className="
            capitalize
            text-5xl
            font-semibold
            text-neutral-600
          "
            >
              lessons and insights
              <span
                className="
              block
              text-green-600
              mt-2
            "
              >
                from 8 years
              </span>
            </h1>
            <p
              className="
            text-neutral-500
            text-xs
          "
            >
              Where to grow your business as a photographer: site or social
              media?
            </p>

            
            <Button buttonContent="Register"/>
          </div>

          {/* image */}
          <Illustration imageSrc={HeroMainImage} imageAlt='Hero Illustration'/>

          {/* buttons */}
          <div
            className="
          flex
          justify-center
          items-center  
          gap-2
          absolute
          bottom-3
        "
          >
            <div className="h-2 w-2 bg-green-600 rounded-full cursor-pointer"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full cursor-pointer"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full cursor-pointer"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
