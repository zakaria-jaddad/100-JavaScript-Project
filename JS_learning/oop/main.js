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
    // static property 
    static count = 0;

    constructor(id, firstName, lastName, salary) {
        // properties
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        // even this is like a fucntion but it returns the value to a property
        this.msg = function () {
            return `Hello ${this.firstName}, your Salary is : ${this.salary}`;
        }
        User.count++;
    }
    // Methods
    WriteMsg() {
        return `Hello ${this.firstName}, your Salary is : ${this.salary} and this is a method`;
    }

    // static method
    static getNumberOfUsers() {
        return User.count;
    }

    // update first name
    updateFirstName(newFirstName) {
        this.firstName = newFirstName;
    }
    sayHello() {
        return `Hello ${this.firstName + ' ' + this.lastName}`;
    }
}

let secondZakaria = new User(2, 'Zakaria', 'jaddad', 2000)

console.log(secondZakaria.id)    // 2
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

// update properties using updateFirstName function
console.log(secondZakaria.firstName);   // 'Zakaria'
secondZakaria.updateFirstName('Boussa');
console.log(secondZakaria.firstName);   // 'Boussa'

// getting number of users using static method
console.log(`number of users is ${User.count}`);    // 'number of users is 1'
/* 
    a class has it's own properties and methods only reachebal using class name, not object
*/

// ! INHERITANCE
class Admin extends User {  // using extends we make sure to inherit, we inherit all method from the inherited class
    constructor(id, firstName, lastName, permission) {
        // using super we get properties from the inherited class
        super(id, firstName, lastName);
        this.permission = permission;
    }
} 

let admin = new Admin(100, 'Younnes', 'Jaddad', 1);
console.log(admin.id);  // 100
console.log(admin.firstName);   //  'Younnes'
console.log(admin.lastName);    // 'Jaddad'
console.log(admin.permission);  // 1
// inherited methods from User class
console.log(admin.sayHello());   // 'hello Younnes Jaddad'
console.log(Admin.getNumberOfUsers());  // 2


// !PROTOTYPE
console.log(User.prototype)

Object.prototype.love = 'Elzero Web School';
console.log(String.prototype)