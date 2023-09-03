/*
  Regular Expression

    Quantifiers
    n+    => One Or More
    n*    => zero or more
    n?    => zero or one
    n{x}   => Number of
    n{x,y} => Range
    n{x,}  => At Least x
    $  => End With Something
    ^  => Start With Something
    ?= => Followed By Something
    ?! => Not Followed By Something
*/

let urls = 'https://google.com http://www.website.net web.com zakaria.com';

// regex pattern for a simple web site
let urlRe = /(https?:\/\/)?(www.)?\w+.(com|net)/ig ;

console.log(urls.match(urlRe));     // output [ 'https://google.com', 'http://www.website.net', 'web.com', 'zakaria.com' ]

// part 2
let serials = "S100S S3000S S50000S S950000S";

let serialReg = /s\d{3}s/ig;

console.log(serials.match(serialReg)); // Three numbers     output [ 'S100S' ]
console.log(serials.match(/s\d{4,5}s/ig)); // S [Four or Five numbers]      output  [ 'S3000S', 'S50000S' ]
console.log(serials.match(/s\d{4,}s/ig)); // S Starting form four numbers       output  [ 'S3000S', 'S50000S', 'S950000S' ]

// part 3

let something = 'something';

// start with something wich is 'some'
console.log(/^some/ig.test(something)); // true

// ends with thing
console.log(/thing$/ig.test(something)); //true

// followed by something
console.log(/some(?=thing)/ig.test(something)); // true