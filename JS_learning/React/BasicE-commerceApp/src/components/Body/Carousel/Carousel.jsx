import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowRight from "/images/carousel/svg/arrow-right.svg";
import arrowLeft from "/images/carousel/svg/arrow-left.svg";
import carouselData from "./CarouselData";

const Carousel = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    nextArrow: (
      <div>
        <img src={arrowRight} />
      </div>
    ),

    prevArrow: (
      <div>
        <img src={arrowLeft} />
      </div>
    ),
  };

  const Slides = carouselData.map((Slide, SlideIndex) => {
    return (
      <div key={SlideIndex} className="slides-container">
        <img
          src={Slide.imageSrc}
          alt={Slide.imageAlt}
        />
      </div>
    );
  });

  return (
    <div>
      <Slider {...settings} className="">
        {Slides}
      </Slider>
    </div>
  );
};
export default Carousel;
