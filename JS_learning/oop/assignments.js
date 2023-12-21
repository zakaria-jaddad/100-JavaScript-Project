/* 
    Assignment 1

    You have the following Constructor Function that needs to be converted to Class Syntax
    Don't rely on the program and do it yourself to make sure you know Syntax
    Add two Methods, one named run and one named stop
    Each of them contains a message
    The first is Car Is Running Now and the second is Car Is Stopped
    Create three cars using this class with any data you choose
    Print the data for the first car from the console in the manner shown below
    In the next line, print the method called run
    function Car(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
    }

    // Needed Output

    "Car One Name Is MG And Model Is 2022 And Price Is 420000"
    "Car Is Running Now"
*/

class Car {
    constructor(name, model, price) {
        this.name = name; 
        this.model = model;
        this.price = price;
    }
    // methods
    Run() {return 'Car Is Running Now';}
    Stop() {return 'Car Is Stoped Now';}
}

let firstCar = new Car('R4', 'IDK', 500);
let secondCar = new Car('Toyota', 'Toyota', 600);
let thirdCar = new Car('Clio', 'Clio 4', 10);

console.log(`Car One Is :${firstCar.name} And Model Is :${firstCar.model} And Ptice Is :${firstCar.price}`);
console.log(firstCar.Run())

/* 
    Assignment 02
    We have the following class called Phone
    We need to create another class called Tablet that inherits the properties of the Phone class
    The Tablet Class contains an additional Property, which is size
    It also contains a method named fullDetails
    We used the class called Tablet to create more than one Tablet
    We then used the method called fullDetails, which prints data about the tablet
    Now all you have to do is create the Tablet Class to display the data as shown below
    If the person does not write size, the word Unknown should appear

*/

class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

// Write Tablet Class Here
class Tablet extends Phone {
    constructor (name, serial, price, size) {
        super(name, serial, price);
        this.size = size || 'Unknown';
    }
    fullDetails() {
        return `${this.name} Serial Is ${this.serial} And Size Is ${this.size}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown


/* 
    Assignment 03
    You have the following class named User
    We need to modify it as you wish to implement what is required below
    First, prevent access to the Card Property directly
    When creating users, you notice that each person wrote the Card Number in a different way
    We need all numbers to be a String and after every 4 numbers there is a sign - as in Output
    You must not modify the user creation lines or the console lines

*/

console.log('##########');

// Edit The Class
class User {
    #c;
    constructor(username, card) {
        this.u = username;
        this.#c = String(card);
        this.showData = `Hello ${this.u} YouR Credit Card Is ${this.getCard()}` 
    }
    getCard() {
        // checking the card 
        let cardReGex = /\d{4}-\d{4}-\d{4}-\d{4}/ig;
        if (!cardReGex.test(this.#c)) {
            return this.converCreditCard(this.#c);
        }
        return this.#c;
    }
    converCreditCard(card) {
        let newCard = [];

        for (let i = 0; i < card.length; i++) {
            if ((i + 1) % 4 === 0 && i + 1 !== card.length)
                newCard[i] = card.charAt(i) + '-'; 
            else 
                newCard[i] = card.charAt(i); 
        }
        card = newCard.join('');
        return card;
    }

}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


/* 
    Assingment 04

    You have the following String
    We then used a method called addLove
    The result appears as shown in the Output below
    What do you need to write to make this method work and show the desired result?
 */

console.log('######');

// Write Your Code Here
String.prototype.addLove = function() {
    return 'I Love Elzero Web School';
}

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

/* 

    Assignment 05

    We have the following object
    After that, there is a line that changes the value of the Score
    After that, there is a loop that prints the entire content of the object, the name of the property, and the value next to it
    After that, the content of the object is printed in the console
    It is forbidden to modify the content of the object, the loop, or the print line in the console
    In the designated space, you must write the code to do the required thing
    It is required that the score value is not allowed to be changed
    It is required that the id not be shown inside the loop, but it appears without any problem in the content of the object in the console
    It is required that the Country not appear in the Loop or in the Object content in the Console
    
    */

console.log('#####');

const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
// Object.defineProperty(myObj, 'id', {

// })
Object.defineProperties(myObj, {
    id : {
        writable : true, 
        configurable : true, 
        enumerable : false, 
    },
    score : {
        writable: false
    }, 
    country :  {
        enumerable: false, 
        configurable : true, 
        writable : true
    }   
})
myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);


/* 
    Needed Output

    "username => Elzero"
    "score => 1000"
    {username: 'Elzero', score: 1000, id: 100}

 */