import logo from "/Logo-dark.svg";
import arrowRight from "/images/arrow-right-white.svg";
import burgerIcon from "../assets/burger-menu-right-svgrepo-com.svg";
import closeIcone from "../assets/close.svg";
import Ul from "../ui/Ul";

import { useState } from "react";

const Li = ({ title }) => {
  return (
    <li>
      <a href={"#" + title.toLowerCase()}>{title}</a>
    </li>
  );
};

function Header() {
  let [headerIcon, setHeaderIcon] = useState(burgerIcon);
  let [sideBarStyle, setSideBarStyle] = useState({
    isOpen: false,
    classValue:
      "bg-gray-50 opacity-70 absolute top-0 right-0 h-screen w-0 transition-all ease-in-out duration-700 z-10 ",
  });

  return (
    <header
      className="
      h-16
      sticky top-0 
      bg-white
      z-20
    "
    >
      <div
        className="
        container mx-auto px-6
          flex
          flex-row
          items-center  
          justify-between
          gap-11
          h-full
        "
      >
        {/* image */}
        <div
          className="
            flex
            justify-center
            items-center
            h-full
          "
        >
          <img
            className="
              h-6
            "
            src={logo}
            alt="Nexcent Logo"
          />
        </div>

        {/* nav bar */}
        <div
          className="
            flex-1  
            items-center
            h-full
            hidden
            md:flex
            "
        >
          <div
            className="
            flex
            justify-end
            gap-6
            w-full
            h-12
            text-base
            "
          >
            <ul
              className="
                flex
                items-center
                gap-4
                leading-4
                text-center
              "
            >
              <Li title="Home" />
              <Li title="Features" />
              <Li title="Community" />
              <Li title="Blog" />
              <Li title="Pricing" />
            </ul>
            <a
              className="
                flex
                justify-center
                items-center
                gap-1
                bg-green-600
                text-gray-50
                rounded-sm
                h-full
                w-36
              "
              href="#"
            >
              <span>Register Now</span>
              <img
                className="
                  h-4
                  w-3
                "
                src={arrowRight}
                alt=""
              />
            </a>
          </div>
        </div>

        {/* burger button */}
        <div
          className="
            flex  
            md:hidden
          "
        >
          <img
            className="
              h-8
              cursor-pointer
              z-20
            "
            onClick={(e) => {
              // change button
              const icon = headerIcon === burgerIcon ? closeIcone : burgerIcon;
              setHeaderIcon(icon);

              // show or hide side bar
              const style =
                sideBarStyle.isOpen === false
                  ? {
                      isOpen: true,
                      classValue:
                        "bg-gray-50 opacity-70 absolute top-0 right-0 h-screen w-2/5 transition-all ease-in-out duration-700 z-10 ",
                    }
                  : {
                      isOpen: false,
                      classValue:
                        "bg-gray-50 absolute top-0 right-0 h-screen w-0 transition-all ease-in-out duration-700 z-10 ",
                    };

              setSideBarStyle(style);
            }}
            src={headerIcon}
          />
        </div>
      </div>

      {/* side bar */}
      <div
        className={sideBarStyle.classValue + "md:hidden text-secondary text-lg"}
      >
        <Ul
          list={[
            {
              heading: "",
              links: ["Home", "Features", "Community", "Blog", "Pricing"],
              ulStyle: "text-lg flex flex-col gap-y-[20px] mt-[50px] pl-[15px] text-secondary",
            },
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
