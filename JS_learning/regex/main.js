let urls = 'https://google.com http://www.website.net web.com zakaria.com';

// regex pattern for a simple web site
let urlRe = /(https?:\/\/)?(www.)?\w+.(com|net)/ig ;

console.log(urls.match(urlRe));

// part 2
let serials = "S100S S3000S S50000S S950000S";

let serialReg = /s\d{3}s/ig;

console.log(serials.match(serialReg)); // Three numbers
console.log(serials.match(/s\d{4,5}s/ig)); // S [Four or Five numbers]
console.log(serials.match(/s\d{4,}s/ig)); // S Starting form four numbers

// part 3

let something = 'something';

// start with something wich is 'some'
console.log(/^some/ig.test(something));

// ends with thing
console.log(/thing$/ig.test(something));

// followed by something
console.log(/some(?=thing)/ig.test(something));