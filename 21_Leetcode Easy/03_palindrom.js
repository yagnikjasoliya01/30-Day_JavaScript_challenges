// • Task 3: Solve the "Palindrom number" problem on LeetCode.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x.toString() === x.toString().split('').reverse().join(''))
    {
        return true;
    }
    else{
        return false;
    }
};