//Activity - 01 

// • Task 1: Solve the "Two Sum" problem on LeetCode.
// • Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to
// the target.
// • Log the indices for a few test cases.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
}; 