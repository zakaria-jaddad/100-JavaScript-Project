import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import ThemeLogo from "/public/icons/settings/theme.svg";
import tailwindConfig from "../../../../tailwind.config";
import { useState } from "react";

function changeTheme(themeMainColor) {
  const tailwindcss = require("tailwindcss");
  console.log(tailwindConfig.theme.extend.colors);
  tailwindConfig.theme.extend.colors.mainBgColor = "white";
  console.log(tailwindConfig.theme.extend.colors);
  console.log(tailwindConfig);
  return tailwindcss(tailwindConfig).then((result) => console.log(result));
}
function Theme() {
  const [firstTheme] = useState({
    mainBgColor: "#3C3633",
    mainTextColor: "#EEEDEB",
    secondTextColor: "#1F1717",
    thirdTextColor: "#747264",
  });
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="Theme">
        <ThemeLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      <ToggleSetting settingsHeader="Color Themes">
        <div className="flex items-center self-end gap-[15px]">
          <div
            onClick={() => {
              changeTheme("#3C3633");
            }}
            className="bg-[#3C3633] w-[28px] h-[28px] rounded cursor-pointer"
          ></div>
          <div
            onClick={() => {
              changeTheme("#0D0D0D");
            }}
            className="bg-[#0D0D0D] w-[28px] h-[28px] rounded cursor-pointer"
          ></div>
          <div
            onClick={() => {
              changeTheme("#232625");
            }}
            className="bg-[#232625] w-[28px] h-[28px] rounded cursor-pointer"
          ></div>
        </div>
      </ToggleSetting>
    </div>
  );
}
export default Theme;
