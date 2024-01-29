import SettingsLogo from "/public/icons/header/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { hidePage, showPage } from "../../../app/slices/settingsSlice/settingsPageSlice";

const NavBar = () => {
  const isSettings = useSelector((state) => state.settings.settingsPage);
  console.log(isSettings);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li
          className="h-full flex justify-center items-center gap-[5px] p-[8px_12px] min-w-[70px] bg-transparent rounded-[5px] cursor-pointer
            opacity-[0.9] hover:opacity-[1] transition-all duration-300
          "
          onClick={() => {
            isSettings === true ? dispatch(hidePage()) : dispatch(showPage());
          }}
        >
          <div>
            <SettingsLogo
              height={17}
              width={17}
              className="text-mainTextColor"
            />
          </div>
          <div>
            <span className="block">Settings</span>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
