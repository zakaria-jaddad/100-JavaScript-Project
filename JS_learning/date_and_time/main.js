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

    // this whole thing it calculate the years from 1 1970 to 26 09 2003
const myBirth = new Date(Date.parse('09 26 2003'));
console.log(myBirth)

// seconds
const seconds = myBirth.getTime() / 1000 ;
console.log(`${seconds} Seconds`);

// minutes
const minutes = seconds / 60;
console.log(`${minutes} Minutes`);

// Hours
const hours = minutes / 60;
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

