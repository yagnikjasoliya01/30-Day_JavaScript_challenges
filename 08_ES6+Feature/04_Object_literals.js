//Activity - 05 Enhanced object liteals

//Task - 8
//use Enhanced object liteals to create object with methods and properties 
const person = {
    name: "Yagnik",
    age: 20,

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },

    [`sum${2+3}`](a,b){
        return a+b;
    }
}
console.log(person.name);
console.log(person.greet());
console.log(person.sum5(6,5));

// Task - 9 
// Create an Object with Computed Property Names and Log to Console
const var1 = 'hi'
const var2 = 'Yagnik'

const obj = {
    [`${var1}`] : 'value1',
    [`${var2}`] : 'value2'
}

console.log(obj);