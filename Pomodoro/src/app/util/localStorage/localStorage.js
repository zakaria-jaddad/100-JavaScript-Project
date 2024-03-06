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
  let savedValue = JSON.parse(localStorage.getItem(KEY));

  // if value in local storage
  if (savedValue) {
    return savedValue;
  }
  // if there is nothing save new value and return it
  return saveValue(KEY, value);
}

export { saveValue, getSavedValue };
