//Activity - 02  finally block

//Task - 03
//  Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe
// the execution flow.

function finallyBlock(){
    try {
        console.log("Inside try block");

        throw new Error("Simulated error occurred.")
    } catch (error) {
        console.error("Inside catch block:", error.message)
    }
    finally{
        console.log("Inside finally block: Cleaning up resources...");
    }
}
finallyBlock()