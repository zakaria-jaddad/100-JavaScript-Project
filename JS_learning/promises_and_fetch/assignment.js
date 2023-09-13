/* 
    Assignment 01
    You have the following JSON object --> check the assignment.json file
    Using what you learned, we need to print the shape as in the image below
    Note that we printed only 5 articles instead of 10
    Promises must be used to do what is required
[
*/

// const myAssignmentPromise = new Promise((resolve, reject) => {

//     // Request
//     let myAssignmentRequest = new XMLHttpRequest();

//     myAssignmentRequest.onload = function () {

//         // checking for the Response 
//         if (this.readyState === 4 && this.status === 200) {
//             resolve(JSON.parse(this.responseText));
//         }
//         else {
//             reject(Error("Bad Response"));
//         }
//     }


//     myAssignmentRequest.open("GET", "promises_and_fetch/assignment.json")
//     myAssignmentRequest.send();

// })
// .then((responseData) => {

//     // itterating over book items from the json file 
//     for (let i = 0; i < 5; i++) {

        // // heading 3 
        // const heading = document.createElement("h3");
        // heading.textContent = responseData[i].title;

        // // p
        // const paragraph = document.createElement("p");
        // paragraph.textContent = responseData[i].description;

        // // div container
        // const conatiner = document.createElement("div");
        // conatiner.appendChild(heading, paragraph);
        // conatiner.appendChild(paragraph);
        // document.body.appendChild(conatiner)
//     }
// });

/* 
    Assignment 02
    Recreate what was done using fetch function
*/

fetch("promises_and_fetch/assignment.json")
    .then(async (response) => {
        return await response.json()
    })
    .then((responseBooks) => {
        // looping 
        for (let i = 0; i < 5; i++) {
        // heading 3 
        const heading = document.createElement("h3");
        heading.textContent = responseBooks[i].title;

        // p
        const paragraph = document.createElement("p");
        paragraph.textContent = responseBooks[i].description;

        // div container
        const conatiner = document.createElement("div");
        conatiner.appendChild(heading, paragraph);
        conatiner.appendChild(paragraph);
        document.body.appendChild(conatiner)
        }
    })
    .catch(err => console.error(err))
    .finally(() => {
        const div = document.createElement("div")
        div.textContent = "Operation Of Getting Books Is Done";
        div.style.color = "red";
        div.style.fontFamily = "Arial"

        // appending last div to the body node
        document.body.appendChild(div);
    })