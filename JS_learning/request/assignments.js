/* 
    assignment 01
    Create a JSON file containing a list of 5 articles named articles.json
    The article contains the ID, the name of the article’s author, the article’s section, the article’s title, and its content
    You can name the items as you want by following what you learned previously, and you can put any random data

*/
// ==> go to articles.js file

/* 

    Assignment 02

    Make an AJAX call to access the previous JSON object
    Make sure that the request was completed successfully and that the Response Data is present
    Print the response in the console to make sure everything is correct
    Use the existing Events to print the Data Loaded message after the response has finished completely

*/

let ajaxCall = new XMLHttpRequest();
// made it 
ajaxCall.open("GET", "request/articles.json");
ajaxCall.send();


ajaxCall.onreadystatechange = function () {
    // checking for data
    if (this.readyState === 4 && this.status === 200) {
        // priting response as a text 
        console.log(this.responseText);
        console.log("Data Loaded");
    }
}

/* 
    assignment 03

    Convert the previous JSON Object to a JavaScript Object and store the data in a variable named mainData
    Loop all articles and change the articles section to a section called All
    Print the content of the mainData variable in the console after updating
    After doing the above, convert the JavaScript Object to a JSON Object and store it in a variable named updatedData
    Print the content of the UpdatedData variable in the console

*/


let assignment3Request = new XMLHttpRequest();
assignment3Request.open("GET", "request/assignment_03.json");
assignment3Request.send();


assignment3Request.onreadystatechange =  function () {
    // checking for data
    if (this.readyState === 4 && this.status === 200) {
        // convet json to js object 
        let mainData = JSON.parse(this.responseText);

        // looping over mainData
        // this is not an efficient way to do that just you need to know this
        for (let i = 0; i < mainData.length; i++) {

            // change category to all
            mainData[i].category = "all";
        }
        // print mainData content 
        console.log(mainData)

        let updatedData = JSON.stringify(mainData);
        console.log(updatedData)
    }
}


// UpdatedData Variable Content
"JSON Object Content Here"