//Activity - 02  Stack

//Task - 03
// Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
class Stack {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        // Add element to the top of the stack
        this.items.push(element);
    }
    
    pop() {
        // Remove and return the top element of the stack
        if (this.isEmpty()) {
            throw new Error("Cannot pop from an empty stack");
        }
        return this.items.pop();
    }
    
    peek() {
        // Return the top element of the stack without removing it
        if (this.isEmpty()) {
            throw new Error("Cannot peek from an empty stack");
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        // Check if the stack is empty
        return this.items.length === 0;
    }
    
    size() {
        // Return the number of elements in the stack
        return this.items.length;
    }
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());  // Output: 2
console.log(stack.pop());   // Output: 2
console.log(stack.peek());  // Output: 1
console.log(stack.isEmpty());  // Output: false
console.log(stack.size());  // Output: 1


//Task - 04
// Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
class Stack1 {
    constructor() {
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error("Cannot pop from an empty stack");
        }
        return this.items.pop();
    }
    
    peek() {
        if (this.isEmpty()) {
            throw new Error("Cannot peek from an empty stack");
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty() {
        return this.items.length === 0;
    }
    
    size() {
        return this.items.length;
    }
}

function reverseString(str) {
    const stack = new Stack1();
    
    // Push all characters onto the stack
    for (let char of str) {
        stack.push(char);
    }
    
    let reversedStr = '';
    
    // Pop characters from the stack to build the reversed string
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    
    return reversedStr;
}

// Example usage
const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);  // Output: "olleh"
