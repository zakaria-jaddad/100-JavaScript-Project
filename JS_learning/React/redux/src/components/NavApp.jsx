import { Link } from "react-router-dom";
const NavApp = () => {
  return (
    <header className="conatiner mx-auto flex justify-between h-[70px] px-[20px]">
      <div className="h-full flex justify-center items-center  font-semibold text-xl">
        <Link to="/">Raimu</Link>
      </div>
      <div className="h-full w-full flex justify-end gap-[15px]">
        <ul className="h-full flex gap-[15px] items-center">
          <li className="h-[44px] px-[25px] bg-[#eee] flex justify-center items-center">
            <Link to="/">Products</Link>
          </li>
          <li className="h-[44px] px-[25px] bg-[#eee] flex justify-center items-center">
            <Link to="/card">Card</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default NavApp;
