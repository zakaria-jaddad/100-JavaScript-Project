const promise = new Promise((resoleve, reject) => {
    setTimeout(() => {
        resoleve("Good Promise");
    }, 5000);
});

async function getData() {
    console.log("Before Promise");

    // await here insure for the promise Resualt 
    try {
        await promise
        .then((response) => console.log(response))
        .catch(err => console.log(err))
        .finally(() => console.log("End Of Oppperation"))
    }
    catch {
        // console.log("Operation os catched");
    }

    console.log("After Promise");
}
getData();