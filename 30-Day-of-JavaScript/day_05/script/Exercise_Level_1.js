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
