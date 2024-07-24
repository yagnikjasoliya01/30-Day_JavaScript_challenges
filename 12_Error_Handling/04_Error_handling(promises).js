//Activity - 04  Error handling in promises

//Task - 06
// Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to
// the console.
function randomPromise(){
    return new Promise((resolve , reject) => {
        const randomNumber = Math.random();

        if(randomNumber < 0.6)
        {
            resolve("Promise resolved successfully.")
        }
        else{
            reject(new Error("Promise rejected."))
        }
    })
}

randomPromise()
.then((result) => {
    console.log("Promise resolved:", result);
})
.catch((error) => {
    console.error("Promise rejected:", error.message);
})


//Task - 07
// Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error
// message.
function randomPromise1(){
    return new Promise((resolve , reject) => {
        const randomNumber = Math.random();

        if(randomNumber < 0.6)
        {
            resolve("Promise resolved successfully using Async/await")
        }
        else{
            reject(new Error("Promise rejected using Async/await"))
        }
    })
}

async function handleAsyncOperation(){
    try {
        const result = await randomPromise1()
        console.log("Promise resolved:", result);
    }
    catch(error){
        console.error("Promise rejected:", error.message);
    }
}
handleAsyncOperation();
