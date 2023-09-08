/* 
    Assignment 01

    Print the seconds, minutes, hours, days, months and years of your date of birth using the time
    See the result below to know the desired idea
    What is required is to print the values ​​from your date of birth, not the result below
    // Needed Output

    "1247939400 Seconds"
    "20798990 Minutes"
    "346650 Hours"
    "14444 Days"
    "481 Months"
    "40 Years"
 */

const dateNow = new Date()
const myBirth = new Date(Date.parse('09 26 2003'));

const livedTime = dateNow - myBirth;

// seconds
const seconds = parseInt(livedTime / 1000);
console.log(`${seconds} Seconds`);

// minutes
const minutes = parseInt(seconds / 60);
console.log(`${minutes} Minutes`);

// Hours
const hours = parseInt(minutes / 60);
console.log(`${hours} Hours`);

// days
const days = hours / 24;
console.log(`${parseInt(days)} Days`);

// months
const months = days / 30;
console.log(`${parseInt(months)} Months`)

// years
const years = months / 12;
console.log(`${parseInt(years)} year`)

/* 
    Output
    main.js: 24629677888 Seconds
    main.js:28 10494631 Minutes
    main.js:32 174910 Hours
    main.js:36 7287 Days
    main.js:40 242 Months
    main.js:44 20 year
*/