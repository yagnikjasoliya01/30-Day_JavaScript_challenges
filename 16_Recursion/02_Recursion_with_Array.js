//Activity - 02  Recursion with array

//Task - 03
// find sum of all element in the using recursion

function sumOfElements(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumOfElements(arr.slice(1));
    }
}

console.log(sumOfElements([1, 2, 3, 4, 5]));
console.log(sumOfElements([1, 7, 3, 4, 8]));
console.log(`END OF  TASK-03`);

//Task - 04
// find maximum element from the array using recursion

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        return Math.max(arr[0], findMax(arr.slice(1)));
    }
}

console.log(findMax([1, 2, 5, 4, 5]));
console.log(findMax([1, 7, 3, 4, 8]));