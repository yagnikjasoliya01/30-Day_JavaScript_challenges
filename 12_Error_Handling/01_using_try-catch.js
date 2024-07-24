//Activity - 01  basic error handling using try and catch block

//Task - 01
//Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate
// message to the console.

function errorHandling(){
        throw new Error("This is an intentional error.");
}

try {
    errorHandling();   
} catch (error) {
    console.error("Error occurred :" , error.message);
}
console.log(`END OF TASK-1`);


//Task - 02
// Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle
function divideTwoNum(numerator , denominator){
    if(denominator ==  0)
    {
        throw new Error("Division by zero is not allowed.")
    }

    return numerator / denominator;
}

function performDiv(numerator ,denominator){
    try{
        const result = divideTwoNum(numerator , denominator);
        console.log("Result of division is : " , result);
    }
    catch(error){
        console.error("Error occurred : " , error.message);
    }
}

performDiv(15,5);
performDiv(15,0);
