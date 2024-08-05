// • Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
// • Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
// • Log the median for a few test cases, including edge cases.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedarray = [];
    let i=0;
    let j=0;

    while(i<nums1.length && j<nums2.length)
    {
        if(nums1[i] < nums2[j])
        {
            mergedarray.push(nums1[i]);
            i++;
        }
        else{
            mergedarray.push(nums2[j]);
            j++
        }
    }

    while (i < nums1.length) {
        mergedarray.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        mergedarray.push(nums2[j]);
        j++;
    }

    let length = mergedarray.length;
    let mid = Math.floor(length/2);

    if(length % 2 === 0 ){ //even
        return (mergedarray[mid-1] + mergedarray[mid])/2;
    }
    else{
        return mergedarray[mid];
    }
};