import React from "react";



function Clients() {
  return (
    <section className="py-10 lg:py-20">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0 ">
        <div className="flex items-center justify-center flex-col gap-4">
          <h1 className="md:text-3xl text-neutralGray font-bold">
            Our Clients
          </h1>
          <p className="text-neutralGray text-sm text-center">
            We have been working with some Fortune 500+ Clients
          </p>
          <div className="w-full xl:w-3/4  m-auto inline-flex flex-nowrap overflow-hidden ">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
              <img
                className="mr-32 max-w-none"
                src="clientlogo.svg"
                alt="logo"
              ></img>
            </div>

            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll">
              <img
                className="mr-32 max-w-none"
                src="clientlogo.svg"
                alt="logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
