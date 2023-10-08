import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
  const [bar, setbar] = useState(false);
  return (
    <>
      <nav className="w-full font-primary top-0 sticky py-6  z-50 bg-secondary   ">
        <div className="md:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto flex justify-between items-center z-50 px-6 lg:px-0 ">
          <div className=" flex gap-2 items-center z-50 ">
            <img src="I213_948.svg" alt="image" loading="lazy"></img>
            <span className="text-sm font-semibold  sm:text-base lg:text-lg text-brand ">
              Nexcent
            </span>
          </div>
          <div className="hidden min-[800px]:flex ">
            <ul className="min-[800px]:flex min-[800px]:gap-4 text-sm cursor-pointer lg:text-sm lg:font-normal">
              <li className="font-medium">Home</li>
              <li>Service</li>
              <li>Feature</li>
              <li>Product</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="z-50 flex items-center gap-4 ">
            <div className="hidden sm:flex sm:flex-row ">
              <div className="text-sm  sm:flex sm:items-center sm:gap-4 sm:justify-center">
                <button className="text-primary text-left ">Login</button>
                <button className="px-[9px] py-[6px] text-white bg-primary text-left rounded-sm ">
                  Sign Up
                </button>
              </div>
            </div>
            <div onClick={() => setbar(!bar)} className="min-[800px]:hidden">
              {bar ? (
                <MdOutlineClose size={20} />
              ) : (
                <RxHamburgerMenu size={20} />
              )}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`min-[800px]:hidden fixed font-primary inset-0 h-screen transition ease-out duration-300 ${
          bar
            ? " translate-y-0 bg-white z-20"
            : "-translate-y-20 opacity-0 pointer-events-none"
        } `}
      >
        <div className="flex justify-center py-40 h-[100vh]">
          <ul className="flex flex-col gap-4 text-base sm:text-lg font-medium p-4 translate-y-10 transition ease-in-out cursor-pointer min-[800px]:hidden">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
            <div className="flex gap-4 items-center">
              <button className="text-primary text-left sm:hidden">
                Login
              </button>
              <button className="px-[9px] py-[6px] text-white text-left bg-primary rounded-sm sm:hidden ">
                Sign Up
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
