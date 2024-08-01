//Task - 04
// Write a script to remove an item from localStorage. Log the localStorage content before and after removal.
const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

function logLocalStorage(){
    console.log('Current localStorage content:');
    for(let i=0  ; i<localStorage.length ; i++){
        let key = localStorage.key(i);
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

localStorage.setItem('item1', 'value1');
localStorage.setItem('item2', 'value2');
localStorage.setItem('item3', 'value3');

console.log('Before removal:');
logLocalStorage();

localStorage.removeItem('item2');

console.log('After removal:');
logLocalStorage();
