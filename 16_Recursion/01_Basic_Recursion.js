//Activity - 01  Basic Recursion

//Task - 01
// find frctorial using recursion

function fect(num){
    if(num == 0 || num == 1){
        return num;
    }
    else{
        return num*fect(num-1);
    }
}
console.log(fect(5));
console.log(fect(1));
console.log(`END OF  TASK-01`);

//Task - 02
// find nth fiboncci numeber using recursion
function fib(n){
    if(n == 0 || n == 1){
        return n;
    }
    else{
        return fib(n-1)+fib(n-2);
    }
}

console.log(fib(5));
console.log(fib(8));

