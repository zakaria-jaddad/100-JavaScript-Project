import TaskForm from "./ui/TaskForm/TaskForm";
import Task from "./ui/Task";
import TodoistIntegrationButton from "../../ui/TodoisIntegrationButton";
import IntegrationLogo from "/public/icons/header/integration.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Tasks from "./components/Tasks";

const TodoList = ({ isUserAuthenticated }) => {
  const [taskFormRef] = useAutoAnimate();

  return (
    <main className="antialiased mx-auto text-main-text-color">
      <div className="max-w-lg mx-auto p-8 shadow" ref={taskFormRef}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex justify-between items-center border-b w-full h-[60px]">
            <h1 className="text-main-text-color text-xl font-semibold">
              Tasks list
            </h1>
            <div className="h-[35px]">
              <TodoistIntegrationButton
                buttonContent={"Todoist"}
                buttonClassStyles="h-full flex justify-center items-center gap-[0px] sm:gap-[5px] p-[8px_12px] min-w-[0px] sm:min-w-[70px] bg-transparent rounded-[5px] cursor-pointer
                                    opacity-[0.9] hover:opacity-[1] transition-all duration-300"
                buttonIcon={
                  <IntegrationLogo
                    height={17}
                    width={17}
                    className="fill-main-text-color"
                  />
                }
              />
            </div>
          </div>
        </div>
        {isUserAuthenticated === true ? <Tasks /> : null}
      </div>
    </main>
  );
};

export default TodoList;
