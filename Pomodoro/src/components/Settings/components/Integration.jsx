import info from "../../../api/todoist/info";
import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import Integrationlogo from "/public/icons/settings/integration.svg";

function Integration() {
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="integration">
        <Integrationlogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      <ToggleSetting settingsHeader="todoist">
        <a
          href={`https://todoist.com/oauth/authorize?client_id=${info.clientID}&scope=${info.permissionScopes}&state=${info.state}`}
          className="px-[12px] duration-300 transition-all opacity-70  hover:opacity-100 capitalize text-second-text-color text-sm rounded border border-solid border-second-text-color h-full flex items-center justify-center"
        >
          connect
        </a>
      </ToggleSetting>
    </div>
  );
}

export default Integration;
