import React from "react";
import CountUp from 'react-countup';

function Body() {
  return (
    <section className="h-[50rem] 2xl:h-[60rem] py-20 lg:py-40 xl:py-40 bg-secondary">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0  flex flex-col gap-10 lg:gap-4  items-center justify-center lg:flex-row ">
        <div className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col text-4xl sm:text-5xl xl:text-6xl">
              <h1 className="text-neutralGray">Lessons and Insights</h1>
              <h1 className="text-primary">from <CountUp start={0} end={8} duration={3} delay={0.5}></CountUp> Years</h1>
            </div>
            <p className="text-neutralGray">
              Where to grow your business as a photographer; site or social
              media?{" "}
            </p>
            <button className="py-[10px] w-[120px] text-white font-light  bg-primary rounded-md">
              Register
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="10_917.svg"
            alt="image"
            className="w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px]"
            loading="lazy"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Body;
