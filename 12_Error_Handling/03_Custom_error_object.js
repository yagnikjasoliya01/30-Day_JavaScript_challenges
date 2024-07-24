//Activity - 03  custom error object

//Task - 04
//Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and
// handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwError() {
    throw new CustomError("This is a custom error message.");
}

function handleCustomError() {
    try {
        throwError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.error("Custom error caught:", error.message);
        } else {
            console.error("Unexpected error:", error.message);
        }
    }
}
console.log(`END OF TASK-4`);

handleCustomError();


//Task - 05
// Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation
// fails. Handle the custom error using a try-catch block.

function validateInput(input){
    if(!input || input.trim === ""){
        throw new Error("Input cannot be empty.");
    }
}

function processUserInput(input){
    try {
        validateInput(input);
        console.log("Input is valid:", input);

    } catch (error) {
        console.error("Unexpected error:", error.message);
    }
}

processUserInput('Yagnik');
processUserInput("")