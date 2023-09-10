let myRequest = new XMLHttpRequest();

// empty request 
console.log(myRequest);

// making a request to github apt
myRequest.open("GET", "https://api.github.com/users/zakaria-jaddad")
myRequest.send()

// checking 
myRequest.onreadystatechange = function () {
    // checking for status and readyState
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText); 
    }
}

// shoing the content of the reuest Object  
console.log(myRequest);

