import LogoIcon from "/public/icons/header/logoIcon.svg";

const Logo = () => {
  return (
    <div className="flex h-full justify-center items-center gap-[5px]">
      <div>
        <LogoIcon height={25} width={25} strokeWidth="3"/>
      </div>
      <div className="logo-title text-xl font-bold">MyPomodoro</div>
    </div>
  );
};

export default Logo;
