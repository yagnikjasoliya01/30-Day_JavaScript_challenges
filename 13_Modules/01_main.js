
//IMPORT ALL FILE DATA/FUNCTION IN THIS main.js AND RUN

//Activity - 01  Create and Export Modules------------------------------------------------------

//Task - 01
//Create a module that exports a function to add two numbers. Import and usethis module in another script.
const addNumber = require('./01_Create_&_Export');

const result = addNumber.addition(5,6);
console.log("Result of addition:", result);    


//Task - 02
//Create a module that exports an object representing a person with properties and methods. Import and use this module in
//another script.
const person = require('./01_Create_&_Export');

console.log(person.name);
console.log(person.age);
console.log(person.greeting());
