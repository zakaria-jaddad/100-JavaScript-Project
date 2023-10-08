import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
function Customers() {
  return (
    <section className="bg-secondary py-10 ">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0 flex gap-4 flex-col items-center  lg:flex-row max-h-full lg:h-[400px]   ">
        <div className="max-w-full max-h-full w-full xl:w-[80%] ">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="customers.webp"
              className="max-h-full max-w-full lg:h-[350px] lg:w-[330px] "
              alt="image"
              loading="lazy"
            ></img>
          </div>
        </div>
        <div className="w-full  ">
          <div className="flex flex-col gap-4">
            <p className="text-neutralGray text-sm font-light text-justify">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="flex flex-col gap-2">
              <h1 className="text-primary font-medium">Tim Smith</h1>
              <p className="text-neutralLGray text-sm font-light">
                British Dragon Boat Racing Association
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center sm:items-start 2xl:gap-4">
              <img src="customersbanner.svg" alt="image" loading="lazy"></img>
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-primary text-sm md:text-base font-semibold ">
                  Meet all the Customers
                </span>
                <MdArrowRightAlt className="animate-bounceRight " size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
