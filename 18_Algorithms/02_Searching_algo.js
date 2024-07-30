//Activity - 02  Searching algorithms

//Task - 04
// linearSearch
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let target = 22;
let index = linearSearch(arr, target);

if (index !== -1) {
    console.log(`Target value ${target} found at index: ${index}`);
} else {
    console.log(`Target value ${target} not found in the array.`);
}

//Task - 05
// linearSearch
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    
    return -1; 
}

let arr1 = [11, 12, 22, 25, 34, 64, 90];
let target1 = 64;
let index1 = binarySearch(arr1, target1);

if (index !== -1) {
    console.log(`Target value ${target1} found at index: ${index1}`);
} else {
    console.log(`Target value ${target1} not found in the array.`);
}
