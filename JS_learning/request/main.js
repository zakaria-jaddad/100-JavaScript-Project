let myRequest = new XMLHttpRequest();

// empty request 
console.log(myRequest);

// making a request to github apt
myRequest.open("GET", "articles.json");
myRequest.send()

// checking 
myRequest.onreadystatechange = function () {
    // checking for status and readyState
    if (this.readyState === 4 && this.status === 200) {
        // loping on data
        let jsData = JSON.parse(this.responseText);

        // lopping the JS data
        console.log(jsData);
    }
}

// shoing the content of the reuest Object  
console.log(myRequest);

