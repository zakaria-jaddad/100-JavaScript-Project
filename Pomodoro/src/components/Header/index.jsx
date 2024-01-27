import Logo from "./components/Logo";
import NavBar from "./components/NavBar";

const Header = () => {
  return (
    <header
      className="
        container px-[20px]
        h-[60px]
        flex justify-between items-center bg-red-600
        text-white
        "
    >
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
