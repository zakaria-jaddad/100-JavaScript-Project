import useLocalStorage, { SAVE_DATA } from "../../hooks/useLocalStorage";

/* 
  KEY: String 
  value: Object

  save value to localStorage by KEY
*/
export default function saveDataToLocalStorage(KEY, value) {
  useLocalStorage({
    key: KEY,
    type: SAVE_DATA,
    value: value,
  });
}
