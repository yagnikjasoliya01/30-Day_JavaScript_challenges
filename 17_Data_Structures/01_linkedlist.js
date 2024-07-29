//Activity - 01  linkedlist  

//Task - 01
// Implement a Node class to represent an element in a linked list with properties value and next
class Node {
    constructor(value = null , next = null) {
        this.value = value;
        this.next = null;
    }

    toString() {
        return `Node(value=${this.value})`;
    }
}

const node1 = new Node(1);
const node2 = new Node(5);
const node3 = new Node(3);

// Linking nodes
node1.next = node2;
node2.next = node3;

// Print nodes
let current = node1;
while (current !== null) {
    console.log(current.toString());
    current = current.next;
}


//Task - 02
// Implement a LinkedList class with methods to add a node at the end, delete a node from end, and  display all nodes.
class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Start with an empty list
    }

    // Add a node with the given value to the end of the list
    addNode(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            // If the list is empty, make the new node the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            // Add the new node at the end
            current.next = newNode;
        }
    }

    // Delete the node from the end of the list
    deleteNodeFromEnd() {
        if (this.head === null) {
            // List is empty, nothing to delete
            return;
        }
        
        if (this.head.next === null) {
            // List has only one node
            this.head = null;
            return;
        }
        
        // Traverse to the second last node
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        // Remove the last node
        current.next = null;
    }

    // Display all nodes in the list
    displayNodes() {
        let current = this.head;
        let nodes = [];
        while (current !== null) {
            nodes.push(current.value);
            current = current.next;
        }
        console.log(nodes.join(' -> '));
    }
}

// Example usage:
const list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.displayNodes(); // Output: 1 -> 2 -> 3

list.deleteNodeFromEnd();
list.displayNodes(); // Output: 1 -> 2

list.deleteNodeFromEnd();
list.displayNodes(); // Output: 1

list.deleteNodeFromEnd();
list.displayNodes(); // Output: (empty list)

        