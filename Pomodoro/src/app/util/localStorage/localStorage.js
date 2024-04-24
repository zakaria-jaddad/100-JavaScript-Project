/* 
  save value to local storage and return it
*/
function saveValue(KEY, value) {
  localStorage.setItem(KEY, JSON.stringify(value));
  return JSON.parse(localStorage.getItem(KEY));
}

/* 
  gets value from local storage if exist 
  create value and return it if doesn't exist
*/
function getSavedValue(KEY, value) {
  let savedValue = localStorage.getItem(KEY);

  // if value in local storage
  if (savedValue) {
    return JSON.parse(savedValue);
  }

  // value === null means that i want to get the value from local storage,
  // i have no inital value
  if (value === null) {
    return null;
  }
  // if there is nothing save new value and return it
  return saveValue(KEY, value);
}

export { saveValue, getSavedValue };
