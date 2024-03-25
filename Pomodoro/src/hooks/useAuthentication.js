import Todoist from "../api/todoist/Todoist";
import info from "../api/todoist/info";
import getDataFromLocalStorage from "../app/util/localStorage/getDataFromLocalStorage";
import saveDataToLocalStorage from "../app/util/localStorage/saveDataTolocalStorage";
import { useLocation } from "react-router-dom";

const KEY = "Authentication";
const saveUserToken = async (code) => {
  const userToken = await Todoist.getToken(code);
  saveDataToLocalStorage(KEY, userToken.access_token);
};

const useAuthentication = () => {
  const isTokenExist = getDataFromLocalStorage(KEY, null);
  if (isTokenExist !== null) {
    console.log("Happend");
    return false;
  }

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");
  const state = params.get("state");

  if (code === null || state === null) {
    return false;
  }
  if (state !== info.state) {
    return false;
  }
  saveUserToken(code);
  return true;
};
export default useAuthentication;
