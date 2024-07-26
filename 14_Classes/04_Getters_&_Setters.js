//Activity - 04  Getters and Setters

//Task - 07
// Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an
// instance and log the full name using the getter.

//Task - 08
// Add a setter method to the Person class to update the name properties (firstName and lastName ). Update the name using
// the setter and log the updated full name.

class person{
    constructor(firstname , lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`;
    }

    set fullname(name){
        const [firstName ,lastname] = name.split(' ');
        this.firstname = firstName;
        this.lastname = lastname;
    }
}

const result = new person('Yagnik','Jasoliya');
console.log(result.fullname);

result.fullname = 'prince kukadiya';
console.log(result.fullname);