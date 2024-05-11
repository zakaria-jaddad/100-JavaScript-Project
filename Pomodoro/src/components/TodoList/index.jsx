import Todoist from "../../api/todoist/Todoist";
import useTaskForm from "./hooks/useTaskForm";
import TaskForm from "./components/TaskForm";
import Task from "./ui/Task";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import TodoistIntegrationButton from "../../ui/TodoisIntegrationButton";

const TodoList = () => {
  const { taskForm, showTaskForm, hideTaskForm } = useTaskForm();

  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await Todoist.getTasks();
      if (!tasks.isSuccess) {
        toast.error(tasks.message);
        return;
      }
      setTasks(tasks.tasks);
      return;
    };
    getTasks();
    window.addEventListener("online", () => {
      getTasks()
    });
  }, [tasks]);

  const [tasksRef] = useAutoAnimate();
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
              <TodoistIntegrationButton  buttonContent={"Todoist"}/>
            </div>
          </div>
        </div>
        <div id="tasks" className="my-5" ref={tasksRef}>
          {/* here you just need to map over tasks */}
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </div>

        {/* add add task button */}
        {taskForm === true ? (
          <TaskForm tasks={tasks} showTaskForm={showTaskForm} hideTaskForm={hideTaskForm} />
        ) : null}

        <div
          className="w-full"
          onClick={() => {
            showTaskForm();
          }}
        >
          <div
            className={`h-[64px] w-full flex gap-3 items-center justify-center font-semibold text-xl capitalize opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer border-dashed border-white border-[2px] rounded-lg ${
              taskForm == true ? "opacity-100" : ""
            }
          `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            <div className=" text-lg">add task</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TodoList;
