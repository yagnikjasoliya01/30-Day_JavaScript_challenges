//Activity - 01  Create and Export Modules

//Task - 01
//Create a module that exports a function to add two numbers. Import and usethis module in another script.
function addition(a, b){
    return a+b;
}

module.exports = {
    addition: addition
}


//Task - 02
//Create a module that exports an object representing a person with properties and methods. Import and use this module in
//another script.

const person = {
    name: "Yagnik",
    age: 21,
    greeting: function(){
        return `Hello , my name is ${this.name} and I am ${this.age} years old`
    }
}

module.exports = person;