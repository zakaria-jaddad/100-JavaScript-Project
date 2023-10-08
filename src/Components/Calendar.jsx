import React from "react";

function Calendar() {
  return (
    <section className="py-10">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0 flex gap-4 flex-col lg:flex-row md:items-center ">
        <div className="w-full">
          <img
            src="calendar.svg"
            className="w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px] "
            alt="image"
            loading="lazy"
          ></img>
        </div>
        <div className="w-full ">
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h1 className="w-full text-center md:text-left md:text-3xl text-neutralGray font-bold lg:w-[75%]">
                How to design your site footer like we did
              </h1>
              <p className="text-neutralGray text-sm font-light text-justify">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <button className="py-[10px] w-[151px] text-white font-light  bg-primary rounded-md">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
