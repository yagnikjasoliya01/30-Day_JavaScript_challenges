//Activity - 03 Spread and rest operator and default parameter

//Task - 5
//use of spread operator
const arr1 = [1,2,3,4,5]
const arr2 = [...arr1 ,7,8,9]
console.log(arr2) ;
console.log(`END OF TASK-5`);


//Task - 6
//use of rest operator
function sum(...elements){
    return elements.reduce((acc,curr) => acc + curr , 0 );
}

console.log(sum(4,4,5));
console.log(sum(1,2,3));
console.log(sum(41,54,1));
console.log(`END OF TASK-6`);


//Activity - 04  default parameter

//Task - 7
//default parameter
function mul(a , b = 1 ){
    return a*b;
}
console.log(mul(5));
console.log(mul(5,5));