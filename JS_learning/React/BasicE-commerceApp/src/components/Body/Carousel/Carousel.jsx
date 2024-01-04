import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselData from "./CarouselData";

const Carousel = () => {

  const settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const Slides = carouselData.map((Slide, SlideIndex) => {
    return (
      <div
        key={SlideIndex}
        className="slides-container w-full"
      >
      <img
          src={Slide.imageSrc}
          alt={Slide.imageAlt}
        />
      </div>
    )
  })

  return (
    <div>
      <Slider {...settings}>
        {Slides}
      </Slider>
    </div>
  );
};
export default Carousel;
