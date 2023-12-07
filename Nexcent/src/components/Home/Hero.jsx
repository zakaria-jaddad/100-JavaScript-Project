import HeroMainImage from "../../assets/hero-image.svg";

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
        md:h-31
      "
      >
        <div
          className="
        flex 
        justify-center
        items-center
        flex-wrap
        gap-10 md:gap-28 
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
          text-center md:text-left
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
            <button
              className="
              mt-4
              w-fit
              py-3
              px-6
              bg-green-600
              text-gray-50
              rounded-sm
              self-center md:self-start
          "
            >
              Register
            </button>
          </div>

          {/* image */}
          <div
            className="
          h-72
        "
          >
            <img
              className="
            h-full
            w-full  
          "
              src={HeroMainImage}
              alt="Hero Image"
            />
          </div>

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
