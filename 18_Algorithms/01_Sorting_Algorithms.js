//Activity - 01  Sorting algorithms

//Task - 01
// bubble sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}

let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = bubbleSort(arr);
console.log("Sorted array by bubble sort is:", sortedArr);

//Task - 02
// selection sort
function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    
    return arr;
}

let arr1 = [64, 34, 25, 12, 22, 11, 90];
let sortedArr1 = selectionSort(arr1);
console.log("Sorted array by selection sort is:", sortedArr1);

//Task - 03
// quicksort
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let pivot = arr[Math.floor(arr.length/2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);

    return [...quickSort(left) , ...middle ,...quickSort(right)];
}
let arr2 = [64, 34, 25, 12, 22, 11, 90];
let sortedArr2 = selectionSort(arr2);
console.log("Sorted array by quick sort is:", sortedArr2);