// • Task 2: Solve the "Reverse Integer" problem on LeetCode.
// • Write a function that takes an integer and returns it with its digits reversed.
// • Handle edge cases like negative numbers and numbers ending in zero.
// • Log the reversed integers for a few test cases.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res = 0;
    if(x < 0)
    {
        res = String(x).slice(1).split('').reverse().join('') * -1;
    }
    else{
        res = String(x).split('').reverse().join('');
    }

    if(res > Math.pow(2,31)-1 || res < Math.pow(-2,31)){
        return 0;
    }
    return res;
};