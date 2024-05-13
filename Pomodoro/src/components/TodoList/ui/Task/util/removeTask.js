export default function removeTask(taskID) {
  const task = document.getElementById(taskID);
  task.remove();
}
