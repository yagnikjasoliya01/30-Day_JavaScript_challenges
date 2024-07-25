//Activity - 03  named and default exports

//Task - 05
// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and
//use its properties.

const PI = 3.14159;
const num = 2;

function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

module.exports = {
    PI,
    num,
    square,
    cube
};