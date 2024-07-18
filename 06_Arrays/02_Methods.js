//Activity - 03  Methods(intermediate)

let arr = [2,5,7,12,45]
//Task - 7
//map method
let map1 = arr.map((x) => x * 2)
console.log(map1);

//Task - 8
//filter method
const filter1 = arr.filter((x) => x % 2 === 0)
console.log(filter1);

//Task - 9
//reduce method
const reduce1 = arr.reduce((accumulater, currentValue) => accumulater + currentValue ,0)
console.log(reduce1);
