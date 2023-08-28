/* 
    Exercises: Level 1
*/

// 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Zakaria";
const lastName = "Jaddad";
const country = "Morocco";
const city = "Casablanca";
let age = "20";
let isMarried = false;
const year = new Date().getFullYear();

    // use typeof
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2- Check if type of '10' is equal to 10
console.log(typeof '10' === 10);

// 3- Check if parseInt('9.8') is equal to 10
console.log(parseFloat('9.8') === 10);

/* 
    4-  Boolean value is either true or false.
        Write three JavaScript statement which provide truthy value.
        Write three JavaScript statement which provide falsy value.
 */
console.log(true, 1 == 1, 1 !== 2);
console.log(false, 1 !== 1, 1 == 2);

/* 
    5- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    4 > 3             | true
    4 >= 3            | true
    4 < 3             | false
    4 <= 3            | false
    4 == 4            | true
    4 === 4           | true
    4 != 4            | false
    4 !== 4           | false
    4 != '4'          | false
    4 == '4'          | true
    4 === '4'         | false
    Find the length of python and jargon and make a falsy comparison statement.
*/

console.log('Python'.length > 'Jargon'.length);

/* 
    6- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    4 > 3 && 10 < 12        | true
    4 > 3 && 10 > 12        | false
    4 > 3 || 10 < 12        | true  
    4 > 3 || 10 > 12        | true
    !(4 > 3)                | false
    !(4 < 3)                | true
    !(false)                | true
    !(4 > 3 && 10 < 12)     | false
    !(4 > 3 && 10 > 12)     | true
    !(4 === '4')            | true
    There is no 'on' in both dragon and python

*/

/* 
    7- Use the Date object to do the following activities

    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const time = new Date()

console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time);
console.log(time.getDate());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(Date.now());


/* 
    Exercises: Level 2
*/

// 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const base = window.prompt('Base');
const height = window.prompt('height');

console.log(`Tringle area is ${0.5 * base * height}`);

// 2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

const sideA = window.prompt('Enter side A of the tringle');
const sideB = window.prompt('Enter side B of the tringle');
const sideC = window.prompt('Enter side C of the tringle');

console.log(`The perimeter of tringle is ${parseInt(sideA) + parseInt(sideB) + parseInt(sideC)}`);

// 3- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const length = window.prompt('Enter lenght of Tringle');
const widht  = window.prompt('Enter widht of Tringle');

const area = length * widht;

const perimeter = 2 * (length + widht);

console.log(area, perimeter);

// 4- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const radius = window.prompt('Enter Circle radius');

const circleArea = Math.PI * radius**2;

const circumference = 2 * Math.PI * radius;

console.log(circleArea, circumference);

// 6- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
const m =(2-2) / (10-6);
console.log(m);

// 7-Compare the slope of above two questions. 
//  they are the same 

// 8- Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// => delta = 0 that means there only one answer is -3

// 9- Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
const hours  = window.prompt('Enter worked Hours');
const rate = window.prompt('Enter rate');

console.log('Your Weeklyeraning is ' + parseInt(hours) * parseInt(rate));

// 10- If the length of your name is greater than 7 say, your name is long else say your name is short.
const yourName = window.prompt('Enter Your Name');
if (yourName.length > 7) 
    console.log('your name is long');
else
    console.log('your name is short');

// 11- Compare your first name length and your family name length and you should get this output.

if (firstName.length > lastName.length)
    console.log(`your first name, ${firstName} is longer than your familly name, ${lastName}`);
else
    console.log(`your familly name, ${lastName} is longer than your first name, ${firstName}`);

// 13- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
const userBirth = window.prompt('Enter your birth year: ');

const userAge = time.getFullYear() - parseInt(userBirth) ;

if (userAge >= 18)
    console.log(`you are ${userAge}, You are old enough to drive`)
else
    console.log(`you are ${userAge}, You will be allowed to drive after ${18 - userAge}`);

// 14- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
const yearsLived = window.prompt('Enter number of years you live: ');
const yearsLivedInSeconds = parseInt(yearsLived * 364 * 24 * 60 * 60);

// 15- Create a human readable time format using the Date time object

const timeFormat = new Date();

let humanReadableTime = `${timeFormat.getFullYear()}-${timeFormat.getMonth()}-${timeFormat.getDay()} ${timeFormat.getHours()}:${timeFormat.getSeconds()}`;
console.log(humanReadableTime);

humanReadableTime = `${timeFormat.getDay()}-${timeFormat.getMonth()}-${timeFormat.getFullYear()} ${timeFormat.getHours()}:${timeFormat.getSeconds()}`;
console.log(humanReadableTime);

humanReadableTime = `${timeFormat.getDay()}/${timeFormat.getMonth()}/${timeFormat.getFullYear()} ${timeFormat.getHours()}:${timeFormat.getSeconds()}`;
console.log(humanReadableTime);

/* 
    Exercises: Level 3

    Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
        YYY-MM-DD HH:mm eg. 2020-01-02 07:05
*/

const Hours = timeFormat.getHours() >= 10 ? timeFormat.getHours() : `0${timeFormat.getHours()}`;
const Seconds = timeFormat.getSeconds() >= 10 ? timeFormat.getSeconds() : `0${timeFormat.getSeconds()}`;

const ex3 = `${timeFormat.getFullYear()}-${timeFormat.getMonth()}-${timeFormat.getDay()}  ${Hours}:${Seconds}`;
console.log(ex3);

