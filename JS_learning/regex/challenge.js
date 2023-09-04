let url1 = 'elzero.org';
let url2 = 'http://elzero.org'
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
let url6 = 'https://elzero.org/javascript-bootcamp-assignments-lesson-from-134-to-146/'
let url7 = 'https://poe.com/chat/2jpzyznfasl7aylf77b'
let url8 = 'https://github.com/zakaria-jaddad/100-JavaScript-Project/blob/main/JS_learning/regex/char_classes.js'
let url9 = 'https://www.example.com:8080/path/to/page?param1=value1&param2=value2#fragment';
let url10 = 'https://subdomain.example.co.uk:8080/path/to/page?param1=value1&param2=value2#fragment/subpath?query=value'


let re=/(https?:\/\/)?(www\.)?\w{1,}\.[a-z]{1,}:?(.{1,})?/ig;


console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
console.log(url7.match(re));
console.log(url8.match(re));
console.log(url9.match(re));
console.log(url10.match(re));

/* 
    Output

    ['elzero.org']
    challenge.js:12 ['http://elzero.org']
    challenge.js:13 ['https://elzero.org']
    challenge.js:14 ['https://www.elzero.org']
    challenge.js:15 ['https://www.elzero.org:8080/articles.php?id=100&cat=topics']
*/