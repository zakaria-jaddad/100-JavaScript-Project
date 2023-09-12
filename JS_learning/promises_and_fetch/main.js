const getData = (apiLink) => {
    return new Promise((resolve, reject) => {

        // making request 
        let myRequest = new XMLHttpRequest();

        // checking response value  
        myRequest.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            }
            else {
                reject(Error("No Data Found"));
            }
        }


        // sending request
        myRequest.open("GET", apiLink);
        myRequest.send();
    })
}

// hedneling the response
getData("https://api.github.com/users/zakaria-jaddad/repos")
    .then((response) => {
        console.log(response);
    })
    .catch(err => console.error(err))
    .finally(() => console.log("Operations is Done"))