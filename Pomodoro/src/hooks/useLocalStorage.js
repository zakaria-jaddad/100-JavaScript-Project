export const SAVE_DATA = "saveData";
export const GET_DATA = "getData";

function saveValue(key, newValue) {
  localStorage.setItem(key, JSON.stringify(newValue));
}

function getSavedValue(key, value) {
  let savedValue = JSON.parse(localStorage.getItem(key));

  // if value in local storage
  if (savedValue) {
    return savedValue;
  }
  // if there is nothing save new value and return it
  saveValue(key, value);
  return JSON.parse(localStorage.getItem(key));
}

/* 
  Object -> Object 
    takes key like an id for data in localstorage 
    type 
        getData gets data from localStorage
        saveData saves data in localStorage and return it 
        
*/
export default function useLocalStorage({ key, value, type }) {
  let savedValue;

  if (type === "getData") {
    savedValue = getSavedValue(key, value);
  } else if (type === "saveData" || savedValue === null) {
    saveValue(key, value);
    savedValue = getSavedValue(key, value);
  }
  return savedValue;
}
