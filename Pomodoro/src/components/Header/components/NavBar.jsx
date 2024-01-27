import SettingsLogo from "/public/icons/header/settings.svg";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li
          className="h-full flex justify-center items-center gap-[5px] p-[8px_12px] min-w-[70px] bg-transparent rounded-[5px] cursor-pointer
            opacity-[0.9] hover:opacity-[1] transition-all duration-300
          "
          onClick={() => {
            console.log("Hello, Settings");
          }}
        >
          <div>
            {/* <img src={settingsLogo} alt="" width={17} height={17} /> */}
            <SettingsLogo height={17} width={17} />
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
