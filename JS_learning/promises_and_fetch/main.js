const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let employees = ["Minnie McGee", "Mamie Wilkins", "Eula Rogers", "Sallie Gordon"];

    // check if ther is 4 employess
    if (employees.length === 4) {
        resolveFunction(employees);
    }
    else {  
        rejectFunction(Error("Number of Employees Is Not 4"));
    }

}).then((employees) => {

    // remove two employees 
    employees.length = 2;
    return employees;
})
.then((employees) => {
    employees.length = 1;
    return employees;
})
.catch((error) => console.error(error))
.finally((employees) => console.log("Finally block is executed"));
