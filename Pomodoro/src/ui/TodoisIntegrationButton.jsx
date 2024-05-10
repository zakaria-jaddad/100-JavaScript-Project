import info from "../api/todoist/info";
const TodoistIntegrationButton = ({ buttonContent, buttonColor = 'main-text-color'}) => {
  return (
    <a
      href={`https://todoist.com/oauth/authorize?client_id=${info.clientID}&scope=${info.permissionScopes}&state=${info.state}`}
      className={`px-[12px] duration-300 transition-all opacity-70  hover:opacity-100 capitalize text-${buttonColor} text-sm rounded border border-solid border${buttonColor} h-full flex items-center justify-center`}
    >
      {buttonContent}
    </a>
  );
};
export default TodoistIntegrationButton;