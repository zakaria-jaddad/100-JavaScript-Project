import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
function Demo() {
  return (
    <section className="bg-secondary">
      <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0  h-[300px] flex flex-col items-center justify-center gap-4  ">
        <p className="text-center w-full text-neutralBlack font-bold sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl xl:w-[50%] ">
          Pellentesque suscipit fringilla libero eu.
        </p>
        <div className="flex justify-center items-center  ">
          <button className="py-[10px] w-[151px] text-white font-light  bg-primary rounded-md">
            <div className="flex justify-center items-center gap-2">
              <span>Get a Demo</span>
              <MdArrowRightAlt className="animate-bounceRight " size={22} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Demo;
