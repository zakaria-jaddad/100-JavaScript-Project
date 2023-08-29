/* 
    ----USING NODE 

    Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

    Enter your age: 30
    You are old enough to drive.

    Enter your age:15
    You are left with 3 years to drive.
*/

const prompt = require("prompt-sync")({ sigint: true });

const userAge = prompt('Enter Your Age: ');

// statment
if (userAge >= 18)
    console.log(`You Are Ole Enough To Drive.`);
else
    console.log(`You Are Left With ${18 - parseInt(userAge)} To Drive`);

/* 
    Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

    Enter your age: 30
    You are 5 years older than me.
*/
const myAge = 20;

// statment
if (myAge > userAge)
    console.log(`i'm ${myAge - userAge} Older Than You`);
else if (userAge > myAge)
    console.log(`You Are ${userAge - myAge} Older Than Me`);
else
    console.log('We Have The Same Age');

/* 
    If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    using if else
    ternary operator.
    let a = 4
    let b = 3
    4 is greater than 3
*/

let a = 4
let b = 3

if (a > b)
    console.log('a is greater than b')
else if (a < b)
    console.log('b is greater than a')

a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${b} is greater than ${a}`);

/* 

    Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
*/

const userNumber = prompt('Enter Number: ');
parseInt(userNumber) % 2 == 0 ? console.log(`${userNumber} is even`) : console.log(`${userNumber} is odd`)