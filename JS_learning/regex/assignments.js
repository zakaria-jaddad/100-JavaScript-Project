/* 
    You have the following IP. Create a RegExp Pattern to match this IP
*/
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let ipRegex = /^\d{4}:\w{2}\d{1}:3{4}:4{4}:5{4}:6{4}:7{4}:8{4}/ig;
console.log(ip.match(ipRegex))

/* 
    Assignment 02
    You have a variable that contains some names
    You need to create a RegExp Pattern to match names that start with Os and end with O

*/
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// Output
// ['Os10O', 'OsO', 'Os100O']
let specialRegex = /Os\d*O/ig;

console.log(specialNames.match(specialRegex));

/* 
    You have a variable that contains a specific phone number
    You must create a RegExp Pattern to match this phone
 */

let phone = "+(995)-123 (4567)";

let phoneReGex = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;

console.log(phone.match(phoneReGex));   //output : [ '+(995)-123 (4567)' ]

/* 
    You have a Regular Expression Pattern
    It is required to divide it into parts and explain each part in a separate mement
*/
//  let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

/* 
    'http' check if there is an http in the strgin
    's?' this is to check if ther is one or one 's'
    ':\/\/' match this pattern which is '://' for '\' se used the excaping \ for stoping the iterpeter to think it is a mement 
    '(?:[-\w]+\.)?' let's break this together 
        '?:' groups the following together but it doesn't creat a capturing group
        '[-\w]+' makes a group that hase all digits '\w' and icludes the hyphen with '-' and also there is the plus signe '+' wich means it could be one word character of more 
        '\.' followed by a dot 
        '?' Quatifire that means zero or one 
    '([-\w]+)' all words characters + hyphen 
    '\.' a button
    '\w+(?:\.\w+)?\/?.*' lets break the last part togther 
        '\w+' any word character one or more 
        '(?:\.\w+)?' followed by a dot and one or more word charaters all that zero or one time 
        '\/' a backk slash zero or one times using the '?' Quantifire
        '.*' all digits zero or more it means that this part is not nesseciry most of times but it wotrth filtering.


SOME MATCHS URLS {
    https://hello.hello-hello.me
    http://m-e.me.me
    http://me.me
}
*/

// urls Regex
let assignment4UrlsRegex = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;


let assignmentUrl1 = 'https://hello.hello-hello.me';
let assignmentUrl2 = 'http://m-e.me.me';
let assignmentUrl3 = 'http://.me.me'

console.log(assignmentUrl1.match(assignment4UrlsRegex));
console.log(assignmentUrl2.match(assignment4UrlsRegex));
console.log(assignmentUrl3.match(assignment4UrlsRegex));

/* 
    Assignment 5

    You have a set of dates
    Only one pattern is required to match all these dates

*/

let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let assignment5ReGex = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)\d{2,4}/ig; // Write Pattern Here

console.log(date1.match(assignment5ReGex)); // "25/10/1982"
console.log(date2.match(assignment5ReGex)); // "25 - 10 - 1982"
console.log(date3.match(assignment5ReGex)); // "25 10 1982"
console.log(date4.match(assignment5ReGex)); // "25 10 82"
