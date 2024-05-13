import info from "../api/todoist/info";
const TodoistIntegrationButton = ({
  buttonContent,
  buttonClassStyles = "",
  buttonIcon = null,
}) => {
  return (
    <li className="list-none h-full">
      <a
        href={`https://todoist.com/oauth/authorize?client_id=${info.clientID}&scope=${info.permissionScopes}&state=${info.state}`}
        className={buttonClassStyles}
      >
        {buttonIcon === null ? null : <div>{buttonIcon}</div>}
        <div>{buttonContent}</div>
      </a>
    </li>
  );
};
export default TodoistIntegrationButton;
