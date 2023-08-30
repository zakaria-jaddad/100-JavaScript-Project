/*
    Exercise: Level 1
*/

// 1- Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// 2- Print the string on the browser console using console.log()
console.log(challenge);

// 3- Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4- Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5- Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6- Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3));

// 7- Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(0,2));

// 8- Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// 9- Split the string into an array using split() method
console.log(challenge.split())

// 10- Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 11- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

// 12- Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// 13- What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14- What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(challenge.search('J')));

// 14- use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

// 15- Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// 17- Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

// 18- Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

// 19- Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

// 20- Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim(' '));

// 21- Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

// 22- Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('pt'));

// 23- Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

// 24- Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
console.log('30 Day Of'.concat(' ', 'JavaScript'));

// 25- Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

/*
    Exercise: Level 2
*/

/* 
    1- Using console.log() print out the following statement:
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
console.log('The Quote \'There is no exercise better for the heart than reach down and lifting people up.\'by John Holmes teaches us to help one another.');

/* 
    2- Using console.log() print out the following quote by Mother Teresa:
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
console.log('Love is not patronizing and charity isn\'t about pity, it is about love. charity and love are the same -- with charity you give, so don\'t just give money but reach out your hand instead.');

// 3- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if (typeof '10' !== 10) {
    console.log(parseInt('10'));
}

// 4- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.ceil(parseFloat('9.8')));

// 5- Check if 'on' is found in both python and jargon
console.log('python'.includes('on'), 'jargon'.includes('on'));

// 6- I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon'.includes('jargon'));

// 7-Generate a random number between 0 and 100 inclusively.
console.log(Math.ceil(Math.random() * 101));

// 8- Generate a random number between 50 and 100 inclusively.
console.log(Math.ceil(Math.random() * 51) + 50);

// -9 Generate a random number between 0 and 255 inclusively.
console.log(Math.ceil(Math.random() * 255));

// 10-Access the 'JavaScript' string characters using a random number.
let variable = 'JavaScript';
console.log(variable[Math.floor(Math.random() * variable.length)])


/* 
    11- Use console.log() and escape characters to print the following pattern.

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
*/
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12- Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.substr('You cannot end a sentence with because because because is a conjunction'.search('because'), 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because')))

/* 
    Exercises: Level 3
*/

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length)

// 2- Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const becauseRx = /because/gi;
console.log('You cannot end a sentence with because because because is a conjunction'.match(becauseRx).length)

// 3- Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/%@+/gi))

// 4- Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = text.match(/\d+/g);

let total = 0
for(let i = 0; i < numbers.length; i++) {
    total += parseInt(numbers[i]);
}

console.log(total);