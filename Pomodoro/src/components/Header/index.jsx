import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import Settings from "../Settings";
import { useSelector } from "react-redux";

const Header = () => {
  const isSettings = useSelector((state) => state.settings.settingsPage);
  return (
    <header
      className="
        container px-[20px]
        h-[60px]
        flex justify-between items-center 
        text-mainTextColor
        "
    >
      <Logo />
      <NavBar />
      {isSettings === true ? <Settings /> : null}
    </header>
  );
};

export default Header;
