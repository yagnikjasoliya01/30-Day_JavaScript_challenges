//Activity - 04  Module pattern

//Task - 06
// Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItem() {
    const items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`Added: ${item}`);
        },
    
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`Removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function() {
            console.log('Items:', items.join(', '));
          }
    }
    
}

const manager = createItem();

manager.addItem('Apple');  
manager.addItem('Banana'); 
manager.listItems();      

manager.removeItem('Apple'); 
manager.listItems();      

manager.removeItem('Orange');