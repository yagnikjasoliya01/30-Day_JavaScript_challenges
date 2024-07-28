//Activity - 04  Recursive search  

//Task - 07
// write a recursive function for perfrom a binary search on sorted array

function binarySearch(arr, target, left, right) {
    if (left > right)
        return -1;

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target)
        return mid;

    if (arr[mid] > target)
        return binarySearch(arr, target, left, mid - 1);

    return binarySearch(arr, target, mid + 1, right);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 3;
let result = binarySearch(arr, target, 0, arr.length - 1);
console.log(result);
console.log(`END OF TASK-07`);


//Task - 08
// write a recursive function for count occurrences of target element in  unsorted array
function countOccurrences(arr, target) {
    if (arr.length === 0) {
      return 0;
    }
  
    const firstElement = arr[0];
    
    if (firstElement === target) {
      return 1 + countOccurrences(arr.slice(1), target);
    } else {
      return countOccurrences(arr.slice(1), target);
    }
  }

  console.log(countOccurrences([1, 2, 3, 2, 4, 2], 2)); 
  console.log(countOccurrences([5, 5, 5, 5, 5], 5));  
  console.log(countOccurrences([1, 2, 3, 4, 5], 3));  
  console.log(countOccurrences([], 10));                
  console.log(countOccurrences([1, 2, 3, 4, 5], 6));