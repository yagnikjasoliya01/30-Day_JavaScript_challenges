//Activity - 02  named and default exports

//Task - 03
// Create a module that exports multiple functions using named exports. Import and use these functions in another script.
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,    
    subtract,
    multiply
}

//Task - 04
// Create a module that exports a single function using default export. Import and use this function in another script.// 
function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = greet;
