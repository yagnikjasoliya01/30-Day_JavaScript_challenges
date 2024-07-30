//Activity - 04  Array algorithms

//Task - 08
// Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr,k){
    const n = arr.length;

    if(n === 0) return arr;

    k = k % n;

    if(k < 0) k += n;

    const rotateArray = arr.slice(k+1, n).concat(arr.slice(0, k+1));

    console.log(rotateArray);
}
const myArray = [1, 2, 3, 4, 5, 6, 7];
const k = 4;
rotateArray(myArray, k);
console.log(`END OF TASK-08`);


//Task - 09
// Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    const mergedArray = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }
        else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(mergedArray);
}

const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
mergeSortedArrays(sortedArray1, sortedArray2);