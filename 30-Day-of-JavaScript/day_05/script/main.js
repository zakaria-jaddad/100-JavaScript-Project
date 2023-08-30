/* 

*/

// Declare an empty array;
const emptyArray = Array();

// Declare an array with more than 5 number of elements
const arrayWithMoreThan5 = [1, 2, 3, 4, 5, 6];

// Find the length of your array
console.log(arrayWithMoreThan5.length);

// Get the first item, the middle item and the last item of the array
// first item
console.log(arrayWithMoreThan5[0]);

// middle item
console.log(arrayWithMoreThan5[Math.ceil(arrayWithMoreThan5.length/ 2) - 1]);

// last item
console.log(arrayWithMoreThan5[arrayWithMoreThan5.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [ 

    [1, 2, 3], 
    'string', 
    13, 
    {'my age' : 20}, 
    1.1, 
    'voila'
]
console.log(mixedDataTypes);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle and Amazon'];

// print the array
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
// first 
console.log(itCompanies[0])
// middle
console.log(itCompanies[Math.ceil(itCompanies.length / 2) - 1]);
// last 
console.log(itCompanies[itCompanies.length - 1]);

// Print out each company as to that i'm lazy so i'm gonna use loops a for loop 
// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase())
}

console.log(itCompanies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.


console.log(`${itCompanies.join(', ')} are IT companies`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes('Facebook') === true)
    console.log('Facebook') 
else
    console.log('This Companie doesn\'t exost in the array');

// Filter out companies which have more than one 'o' without the filter method
// -> dont know how to do that 

// Sort the array using sort() method
itCompanies.sort();

// Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies, 'reverced')

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, 3));

import countries from "./countries";
import webTechs from "./web_techs";

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.ceil(itCompanies.length / 2) - 1, Math.ceil(itCompanies.length / 2)));

// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies, 'shifted')

// Remove the middle IT company or companies from the array
itCompanies.splice(Math.ceil(itCompanies.length / 2) - 1, 1);
console.log(itCompanies);

// Remove the last IT company from the array
console.log(itCompanies.pop())

// Remove all IT companies
itCompanies.fill('')


/* 
Exercise 2

    First remove all the punctuations and change the string to array and count the number of words in the array

    let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)
*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const words = text.replace(/[.,]/g, '');

console.log(words.split(' '));
console.log(words.length);


/* 
    In the following shopping cart add, remove, edit items

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    add 'Meat' in the beginning of your shopping cart if it has not been already added
    add Sugar at the end of you shopping cart if it has not been already added
    remove 'Honey' if you are allergic to honey
    modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// add Meat.
shoppingCart.unshift('Meat');
console.log(shoppingCart);

// add Sugar
shoppingCart.push('Sugar');
console.log(shoppingCart);

// remove Honey 
const allergic = window.prompt('You are allergic Yes Or No');

if (allergic.toUpperCase() === 'YES')
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1); // this in jeneral i wouldn't wanna use the pop method

console.log(shoppingCart)

//  modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = "Green Tea";

console.log(shoppingCart)


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia') === true)
    console.log(`${countries[countries.indexOf('Ethiopia')].toUpperCase()}`)
else
    countries.push('Ethiopia');


// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') === true ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');


/* 
    Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']

    console.log(fullStack)
    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)



