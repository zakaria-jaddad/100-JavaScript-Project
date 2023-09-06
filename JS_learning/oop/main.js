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
        this.i = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

let secondZakaria = new User(2, 'Zakaria', 'jaddad', 2000)

console.log(secondZakaria.i)    // 2
console.log(secondZakaria.firstName)    // 'Zakaria'
console.log(secondZakaria.lastName) // 'Jaddad'
console.log(secondZakaria.salary)   // 2000