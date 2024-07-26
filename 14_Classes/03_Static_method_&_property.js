//Activity - 03  Static method and properties

//Task - 05
// Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an
// instance of the class and log the message.
class person{
    static greetingMessage() {
        return "Hello! My name is Yagnik";
    }
}

const result = person.greetingMessage();
console.log(result);

//Task - 06
// Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student {
    static studentCount = 0;

    constructor(name) {
        this.name = name;
        
        Student.studentCount++;
        
        console.log(`Total number of students: ${Student.studentCount}`);
    }
}

// Example usage:
const student1 = new Student('Alice'); 
const student2 = new Student('Bob');   
const student3 = new Student('Charlie'); 
