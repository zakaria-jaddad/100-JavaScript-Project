import { TodoistApi } from "@doist/todoist-api-typescript";
import info from "./info";
import getDataFromLocalStorage from "../../app/util/localStorage/getDataFromLocalStorage";

const Todoist = {
  getToken: async (code) => {
    const formData = new FormData();
    formData.append("client_id", info.clientID);
    formData.append("client_secret", info.secret);
    formData.append("code", code);

    const response = await fetch("https://todoist.com/oauth/access_token", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw "Unable to procces request";
    return data;
  },
  getTasks: async () => {
    try {
      const userToken = getDataFromLocalStorage("todoist_token", null);
      const api = new TodoistApi(userToken);

      const tasks = await api.getTasks();
      return tasks;
      // unable to get data
    } catch (error) {
      throw "unable to get tasks";
    }
  },
  deleteTask: async (taskID) => {
    try {
      const userToken = getDataFromLocalStorage("todoist_token", null);
      const api = new TodoistApi(userToken);

      const isSuccess = await api.deleteTask(taskID);
      return isSuccess;
      // unable to get data
    } catch (error) {
      throw "unable to delete task.";
    }
  },
};
export default Todoist;
