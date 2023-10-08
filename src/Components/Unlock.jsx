import React from "react";

function Unlock() {
  return (
    <section className="py-10">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-4 items-center  ">
        <div className="w-full ">
          <img
            src="unlock.svg"
            className="w-full h-[250px] sm:h-[300px] lg:h-[400px] xl:h-[500px] "
            alt="image"
            loading="lazy"
          ></img>
        </div>
        <div className="w-full ">
          <div className="flex flex-col gap-4 right-auto">
            <h1 className="w-full md:text-3xl text-neutralGray font-bold xl:w-[70%]">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="text-neutralGray text-sm font-light text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="py-[10px] w-[151px] text-white font-light  bg-primary rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unlock;
