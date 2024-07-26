//Activity - 02  class inheritance

//Task - 03
// Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID.
// Create an instance of the Student class and log the student ID.
class person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    getName(){
        return this.name;
    }

    getAge(){
        return this.age;
    }
}

class student extends person{
    constructor(name,age,studentId){
        super(name , age)
        this.studentId  = studentId
    }

    getStudentId(){
        return this.studentId;
    }
}

const result = new student('Yagnik' , 19 , 123)
console.log(result.getStudentId());
console.log(result.getName());
console.log(result.getAge());

//Task - 04
// Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class person1{
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class student1 extends person1{
    constructor(name,age,studentId){
        super(name , age)
        this.studentId  = studentId
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    getStudentId(){
        return this.studentId;
    }
}

const result1 = new student1('Yagnik' , 50 , 123)
console.log(result1.greeting());
