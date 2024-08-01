//Activity - 01 UnderStanding localStorage

//Task - 01
// Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

const myString = 'Hello, localStorage!';

localStorage.setItem('myKey', myString);

const result = localStorage.getItem('myKey');

console.log(result);

//Task - 02
// Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it. 
const myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

const myObjectString = JSON.stringify(myObject);

localStorage.setItem('myObjectKey', myObjectString);

const retrievedObjectString = localStorage.getItem('myObjectKey');

const retrievedObject = JSON.parse(retrievedObjectString);

console.log(retrievedObject);
