import Logo from "./logo";
import NavBar from "./NavBar";
const Header = () => {
    return (
        <header className=" bg-blue-500 sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between py-[20px] px-[10px] text-white">
            <Logo />
            <NavBar />
        </div>
        </header>
    )
}


export default Header;