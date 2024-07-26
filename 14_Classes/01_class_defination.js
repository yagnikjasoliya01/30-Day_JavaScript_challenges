//Activity - 01  class defination

//Task - 01
//Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the
// class and log the greeting message.
class person{
    constructor(name,age){
        this.name = name
        this.age = age 
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const result = new person('Yagnik' ,19)
console.log(result.greet());
console.log(`END OF TASK-01`);

//Task - 02
//Add a method to the Person class that updates the age property and logs the updated age.
class person1{
    constructor(name,age){
        this.name = name
        this.age = age 
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge){
        this.age = newAge
        console.log(`Updated age: ${this.age}`);
    }
}

const result1 = new person1('Yagnik' ,19)
console.log(result1.greet());
console.log(result1.updateAge(21));
console.log(result1.greet());
