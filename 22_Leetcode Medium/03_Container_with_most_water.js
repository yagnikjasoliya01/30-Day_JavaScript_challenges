// • Task 3: Solve the "Container With Most Water" problem on LeetCode.
// • Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each
// point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
// • Log the maximum amount of water for a few test cases.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0 ;
    let right = height.length-1;
    let ans = 0;

    while(left < right)
    {
        ans = Math.max(ans, Math.min(height[left] , height[right]) * (right-left));
        height[left] <= height[right] ? left++ : right--;
    }

    return ans;
};  