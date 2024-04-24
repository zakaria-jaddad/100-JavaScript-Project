const TaskForm = ({ showTaskFrom, hideTaskForm }) => {
  return (
    <div className="wrapper px-2 w-full flex justify-center my-5">
      <form className="w-[380px] rounded shadow-lg border border-[#27272a]">
        <div className="flex flex-col ">
          <div className="flex flex-col space-y-1.5 p-6 pb-0">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              New Task!
            </h3>
          </div>
          <div className="p-6 pb-0">
            <div className="flex flex-col space-y-1.5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
                htmlFor="name"
              >
                Task's name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-input bg-main-bg-color px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-[#27272a] border-[#27272a] file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none"
                id="name"
                placeholder="Name of your task"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 p-6 text-sm">
            <button
              type="submit"
              className="bg-main-bg-color text-main-text-color px-4 py-2 rounded font-medium border border-[#27272a]"
              onClick={(e) => {
                e.preventDefault();
                hideTaskForm();
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-main-bg-color bg-[#fafafa] px-4 py-2 rounded font-medium "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;
