import SubTitle from "../ui/SubTitle";
import ToggleSetting from "../ui/ToggleSetting";
import IntegrationLogo from "/public/icons/settings/integration.svg";
import TodoistIntegrationButton from "../../../ui/TodoisIntegrationButton";

function Integration() {
  return (
    <div className="pb-[12px] mb-[12px] border-b border-eGray">
      <SubTitle title="integration">
        <IntegrationLogo width={25} height={25} strokeWidth="2" />
      </SubTitle>

      <ToggleSetting settingsHeader="todoist">
        <TodoistIntegrationButton buttonContent={"Connect"} buttonColor="second-text-color"/>
      </ToggleSetting>
    </div>
  );
}

export default Integration;
