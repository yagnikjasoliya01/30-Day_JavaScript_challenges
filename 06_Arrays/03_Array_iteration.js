//Activity - 04  Array iteration

let arr = [2,45,6,46,3,6]

//Task - 10
//log each element of the array
for (const i in arr) {
    console.log(arr[i]);
}
// for(let i = 0 ; i < arr.length ; i++)
// {
//     console.log(arr[i]);
// }
console.log(`END OF TASK-10`);


//Task - 11
//log each element of the array by foreach
arr.forEach(element => {
    console.log(element);
});

