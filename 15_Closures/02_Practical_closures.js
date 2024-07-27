//Activity - 02  precticle closures

//Task - 03
// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function newId(){
    let Id = 0;

    return function(){
        Id++;
        return `ID-${Id}`;
    }
}

let result = newId()

console.log(result());
console.log(result());
console.log(result());

//Task - 04
// Create a closure that captures a user's name and returns a function that greets the user by name.

function anyName(name){

    return function(){
        return `Hello, ${name}!`;
    }
}

const result1 = anyName('Yagnik');
console.log(result1());
