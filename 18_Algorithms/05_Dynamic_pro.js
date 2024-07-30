//Activity - 05  Dynamic Programming

//Task - 10
// Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fib(n){
    if(n <= 0) return;
    if(n === 1) return [0];

    let fib = [0,1];

    for(let i=2 ; i <= n ; i++){
        fib[i] = fib[i-1] + fib[i-2];   
    } 

    console.log(fib);
}

const num = 11; 
fib(num); 


//Task - 11
// Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
