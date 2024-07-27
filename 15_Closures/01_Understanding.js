//Activity - 01  understanding of closures

//Task - 01
// Write a function that returns another function, where the inner function accesses a variable from the outer function's scope.
// Call the inner function and log the result.
function first(message){
    return function second(name){
        return `${message} ${name} `
    }

}

const result = first('hello')
console.log(result('Yagnik'));

//Task - 02
// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter(){
    let count = 0;

    return{
        increment : function(){
            count++;
        },
        getValue : function(){
            return count;
        }
    }
}

let result1 = createCounter();

result1.increment();
console.log(result1.getValue());

result1.increment();
console.log(result1.getValue());