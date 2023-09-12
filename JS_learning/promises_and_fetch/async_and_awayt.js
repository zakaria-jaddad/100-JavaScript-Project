const promise = new Promise((resoleve, reject) => {
    setTimeout(() => {
        resoleve("Good Promise");
    }, 5000);
});

async function getData() {
    console.log("Before Promise");

    // await here insure for the promise Resualt 
    console.log(await promise);

    console.log("After Promise");
}
getData();