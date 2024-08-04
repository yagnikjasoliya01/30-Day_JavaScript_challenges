// • Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// • Write a function that takes a string and returns the length of the longest substring without repeating characters.
// • Log the length for a few test cases, including edge cases.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxCount = 0;

    for(let right=0 ; right<s.length ; right++)
    {
        while(set.has(s[right]))
        {
            set.delete(s[left]);
            left++;
        }

        set.add(s[right]);
        maxCount = Math.max(maxCount , right-left+1);
    } 
    return maxCount;
};