// regular object 

let firstZakaria = {
    id : 1, 
    'first_name' : 'Zakaria', 
    'last_name' : 'Jaddad', 
    'salary' : 2000
}

console.log(firstZakaria.id);   // 1
console.log(firstZakaria.first_name);   // 'Jaddad'
console.log(firstZakaria.last_name);    // 'Jaddad'
console.log(firstZakaria.salary);   // 2000

// using construtor function

class User {
    constructor(id, firstName, lastName, salary) {
        // properties
        this.i = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        // even this is like a fucntion but it returns the value to a property
        this.msg = function () {
            return `Hello ${this.firstName}, your Salary is : ${this.salary}`;
        }
    }
    // Methods
    WriteMsg() {
        return `Hello ${this.firstName}, your Salary is : ${this.salary} and this is a method`;
    }
}

let secondZakaria = new User(2, 'Zakaria', 'jaddad', 2000)

console.log(secondZakaria.i)    // 2
console.log(secondZakaria.firstName)    // 'Zakaria'
console.log(secondZakaria.lastName) // 'Jaddad'
console.log(secondZakaria.salary)   // 2000
console.log(secondZakaria.msg())
console.log(secondZakaria.WriteMsg())
/* 
    console.log(secondZakaria.msg)
    console.log(secondZakaria.WriteMsg)

    without using '()' the output will be a native code wich it will print the function syntax
*/