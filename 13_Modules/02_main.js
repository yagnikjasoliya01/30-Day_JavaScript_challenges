//Activity - 02 Create and Export Modules

//Task - 03
// Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const {add ,subtract, multiply} = require('./02_named_&_Default');

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(5, 3));
console.log("Multiplication:", multiply(5, 3));

//Task - 04
// Create a module that exports a single function using default export. Import and use this function in another script.// 
const greet = require('./02_named_&_Default');

let message = greet("John");
console.log(message); 

