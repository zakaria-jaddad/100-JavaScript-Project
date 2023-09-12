/* 
    Assignment 01
    You have the following JSON object --> check the assignment.json file
    Using what you learned, we need to print the shape as in the image below
    Note that we printed only 5 articles instead of 10
    Promises must be used to do what is required
[
*/

const myAssignmentPromise = new Promise((resolve, reject) => {

    // Request
    let myAssignmentRequest = new XMLHttpRequest();

    myAssignmentRequest.onload = function () {

        // checking for the Response 
        if (this.readyState === 4 && this.status === 200) {
            resolve(JSON.parse(this.responseText));
        }
        else {
            reject(Error("Bad Response"));
        }
    }


    myAssignmentRequest.open("GET", "promises_and_fetch/assignment.json")
    myAssignmentRequest.send();

})
.then((responseData) => {

    // itterating over book items from the json file 
    for (let i = 0; i < 5; i++) {

        // heading 3 
        const heading = document.createElement("h3");
        heading.textContent = responseData[i].title;

        // p
        const paragraph = document.createElement("p");
        paragraph.textContent = responseData[i].description;

        // div container
        const conatiner = document.createElement("div");
        conatiner.appendChild(heading, paragraph);
        conatiner.appendChild(paragraph);
        document.body.appendChild(conatiner)
    }
})


