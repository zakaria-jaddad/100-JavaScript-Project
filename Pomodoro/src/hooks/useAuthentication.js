import info from "../api/todoist/info";
import saveDataToLocalStorage from "../app/util/localStorage/saveDataTolocalStorage";
import { useLocation } from "react-router-dom";

const KEY = "Authentication";
const useAuthentication = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  //
  const code = params.get("code");
  const state = params.get("state");

  if (code === null || state === null) {
    return false;
  }
  if (state !== info.state) {
    return false;
  }
  saveDataToLocalStorage(KEY, code);
  return true;
};
export default useAuthentication;
