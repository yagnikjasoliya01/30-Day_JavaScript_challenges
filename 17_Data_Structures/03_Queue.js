//Activity - 03  Queue

//Task - 05
// Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first )element i..
class Queue {
    constructor() {
        this._queue = [];
    }

    enqueue(item) {
        // Add an element to the end of the queue
        this._queue.push(item);
    }

    dequeue() {
        // Remove and return the element at the front of the queue
        if (this.isEmpty()) {
            throw new Error("Dequeue from an empty queue");
        }
        return this._queue.shift();
    }

    front() {
        // Return the element at the front of the queue without removing it
        if (this.isEmpty()) {
            throw new Error("Front from an empty queue");
        }
        return this._queue[0];
    }

    isEmpty() {
        // Check if the queue is empty
        return this._queue.length === 0;
    }

    size() {
        // Return the number of elements in the queue
        return this._queue.length;
    }

    toString() {
        // Return a string representation of the queue
        return `Queue(${this._queue.join(', ')})`;
    }
}

// Example usage:
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log("Front element:", q.front());  // Output: 1
console.log("Dequeue element:", q.dequeue());  // Output: 1
console.log("Queue after dequeue:", q.toString());  // Output: Queue(2, 3)
console.log("Queue size:", q.size());  // Output: 2


//Task - 06
// Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.
