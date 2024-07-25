//Task - 05
// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and
//use its properties.

const result = require('./03_Import_intire_modules');

console.log("PI:", result.PI);           
console.log("EULER:", result.num);     
console.log("Square of 5:", result.square(5)); 
console.log("Cube of 3:", result.cube(3)); 