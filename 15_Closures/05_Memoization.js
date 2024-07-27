//Activity - 05  Memoization

//Task - 07
// Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
    const cache = {}; 
    
    return function(arg) {
      if (arg in cache) {
        console.log('Fetching from cache:', arg);
        return cache[arg];
      }
      
      const result = fn(arg);
      cache[arg] = result;
      console.log('Computing result:', arg);
      return result;
    };
  }
  
  function square(n) {
    return n * n;
  }
  
  const memoizedSquare = memoize(square);
  
  console.log(memoizedSquare(4)); 
  console.log(memoizedSquare(4));
  console.log(memoizedSquare(5)); 
  console.log(memoizedSquare(5));  
  

//Task - 07
// Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
  const cache = {}; 
  
  return function(n) {
    if (n in cache) {
      console.log('Fetching from cache:', n);
      return cache[n];
    }
    
    const result = fn(n);
    cache[n] = result;
    console.log('Computing result:', n);
    return result;
  };
}

// Factorial function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Call the memoized factorial function
console.log(memoizedFactorial(5)); // Output: Computing result: 5 \n 120
console.log(memoizedFactorial(5)); // Output: Fetching from cache: 5 \n 120
console.log(memoizedFactorial(6)); // Output: Computing result: 6 \n 720
console.log(memoizedFactorial(6)); // Output: Fetching from cache: 6 \n 720
