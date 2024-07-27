//Activity - 03  closures in loops

//Task - 05
// Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each
// function logs the correct index.
const functionArray = [];

for(let i=0 ; i<5 ; i++){
    
    functionArray.push(function(){
        console.log(i);
    })
}

functionArray.forEach(fn => fn());