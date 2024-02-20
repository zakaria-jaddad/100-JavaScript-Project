import useLocalStorage, { GET_DATA } from "../../hooks/useLocalStorage";

/* 
  KEY: String 
  value: Object

  get value from localStorage if ther is not data saves it and get it
*/
export default function getDataFromLocalStorage(KEY, value) {
  return useLocalStorage({
    key: KEY,
    type: GET_DATA,
    value: value,
  });
}
