let email = '0@@@g...com•0@g.com-0@g.net A@Y.com O-g.com o@s.org 1@1.com';

// every character
let dot = /./g;

// words
let word = /\w/g;

// email validation
let valid = /\w@\w.(com|net)/g;

console.log(email.match(dot), 'classes');
console.log(email.match(word));
console.log(email.match(valid));
