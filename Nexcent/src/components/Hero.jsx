import HeroMainImage from "../assets/hero-image.svg"

export default function Hero() {
  return (
    <div
      className="
        flex 
        justify-center
        items-center
        gap-20
        py-16
        flex-wrap
      "
    >
      <div
        className="
          flex
          flex-col
          gap-3
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
          Where to grow your business as a photographer: site or social media?
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
          src={HeroMainImage} alt="Hero Image" />
      </div>

    </div>
  );
}
