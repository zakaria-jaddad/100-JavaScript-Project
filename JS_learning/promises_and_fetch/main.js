const myPromise = new Promise((rsolveFunction, rejectFunction) => {
    let connection = false;

    // 
    if (connection) {
        rsolveFunction("Connetcion Established");
    }
    else {
        rejectFunction(Error("Connection Field"));
    }
}).then(
    (resolveValue => console.log(`Good ${resolveValue}`)), 
    (rejectedValue) => console.log(`Badd ${rejectedValue}`)
);