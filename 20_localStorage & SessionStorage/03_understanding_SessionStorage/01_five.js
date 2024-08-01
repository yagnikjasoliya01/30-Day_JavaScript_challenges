//Activity - 03  understanding sessionStorage

//Task - 05
// Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const key = 'myKey';
const value = 'This is a test value';

localStorage.setItem(key, value);

const retrievedValue = localStorage.getItem(key);

console.log('Retrieved value from localStorage:', retrievedValue);


//Task - 06
// Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const myObject = {
    name: 'John Doe',
    age: 30,
    occupation: 'Developer',
    hobbies: ['Reading', 'Traveling', 'Coding']
};

// Save the object to sessionStorage after converting it to a JSON string
sessionStorage.setItem('myObjectKey', JSON.stringify(myObject));

// Retrieve the JSON string from sessionStorage
const jsonString = sessionStorage.getItem('myObjectKey');

// Parse the JSON string back into an object
const retrievedObject = JSON.parse(jsonString);

// Log the retrieved object
console.log('Retrieved object from sessionStorage:', retrievedObject);
