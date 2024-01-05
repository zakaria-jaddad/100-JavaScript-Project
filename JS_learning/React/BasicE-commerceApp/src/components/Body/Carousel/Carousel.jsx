import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowRight from "/images/carousel/svg/arrow-right.svg"
import arrowLeft from "/images/carousel/svg/arrow-left.svg"
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
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
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
