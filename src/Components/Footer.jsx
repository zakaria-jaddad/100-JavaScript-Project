import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiBasketball } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { HiPaperAirplane } from "react-icons/hi";
function Footer() {
  return (
    <footer>
      <div className="bg-neutralBlack text-white py-10 ">
        <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1440px] m-auto px-4 lg:px-0  max-h-full xl:h-[300px] flex flex-col justify-center  ">
          <div className="flex flex-col gap-4 sm:gap-20 min-[470px]:flex-row min-[470px]:justify-between lg:gap-0  ">
            <div className="flex flex-col gap-4 lg:gap-8">
              <div className="flex gap-2 items-center ">
                <img
                  src="I211_1053.svg"
                  alt="image"
                  className=""
                  loading="lazy"
                ></img>
                <h1 className="font-medium text-2xl">Nexcent</h1>
              </div>
              <div className="flex flex-col gap-2 text-xs font-light">
                <h1>Copyright © 2020 Nexcent ltd.</h1>
                <h1>All rights reserved</h1>
              </div>
              <ul className="flex gap-4 cursor-pointer">
                <li className="bg-iconbg w-[32px] h-[32px] rounded-full flex justify-center items-center">
                  <AiOutlineInstagram size={22} />
                </li>
                <li className="bg-iconbg w-[32px] h-[32px] rounded-full flex justify-center items-center">
                  <CiBasketball size={22} />
                </li>
                <li className="bg-iconbg w-[32px] h-[32px] rounded-full flex justify-center items-center">
                  <AiOutlineTwitter size={22} />
                </li>
                <li className="bg-iconbg w-[32px] h-[32px] rounded-full flex justify-center items-center">
                  <AiFillYoutube size={22} />
                </li>
              </ul>
            </div>
            <div className="grid gap-4 min-[470px]:grid-cols-1  min-[600px]:grid-cols-2 lg:grid-cols-2 lg:w-[50%] xl:grid-cols-3 xl:w-3/5 2xl:w-1/2 ">
              <div className="flex flex-col gap-2 xl:gap-4">
                <h1 className="font-semibold">Company</h1>
                <ul className="flex text-xs flex-col gap-2  font-light cursor-pointer">
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>Pricing </li>
                  <li>Testimonials </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 xl:gap-4">
                <h1 className="font-semibold">Support</h1>
                <ul className="flex text-xs flex-col gap-2 font-light cursor-pointer">
                  <li>Help Center</li>
                  <li>Terms of Service</li>
                  <li>Legal</li>
                  <li>Privacy Policy</li>
                  <li>Status</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 justify-center items-center min-[470px]:items-start xl:justify-start">
                <h1 className="font-semibold">Stay up to date</h1>
                <div className="flex  relative ">
                  <input
                    type="text"
                    className="bg-defaultGray border-none outline-none h-[40px] w-[255px] pr-8 pl-4 rounded-lg text-xs "
                    placeholder="Your Email Address"
                  ></input>
                  <HiPaperAirplane
                    size={20}
                    className="absolute rotate-45 right-2 top-2 cursor-pointer  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
