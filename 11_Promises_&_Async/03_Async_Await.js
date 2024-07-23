//Activity - 03  understanding Promises

//Task - 04
//Write an async function that waits for a promise to resolve and then logs the resolved value. 
async function waitForPromise(){

    const mypromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolve successfully");
        },2000);
    })

    try {
        const result = await mypromise;
        console.log(result);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

waitForPromise();


//Task - 05
// Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handelRejectedPromise(){

    const mypromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejected with error message"));
        },2000);
    })

    try {
        const result = await mypromise;
        console.log(result);
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
}

handelRejectedPromise()
