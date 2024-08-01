//Task - 08
//Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

function logSessionStorage() {
    console.log('Current sessionStorage content:');
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
}

// Add some example items to sessionStorage for demonstration
sessionStorage.setItem('item1', 'value1');
sessionStorage.setItem('item2', 'value2');
sessionStorage.setItem('item3', 'value3');

// Log sessionStorage content before removal
console.log('Before removal:');
logSessionStorage();

// Remove the item with key 'item2'
sessionStorage.removeItem('item2');

// Log sessionStorage content after removal
console.log('After removal:');
logSessionStorage();