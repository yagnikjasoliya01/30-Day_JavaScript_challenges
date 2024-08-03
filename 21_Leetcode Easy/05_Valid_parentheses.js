// • Task 5: Solve the "Valid Parentheses" problem on LeetCode.
// • Write a function that takes a string containing just the characters '(', ')', 'T, 3', 'T' and ']', and determines if the input string is valid.
// • A string is valid if open brackets are closed in the correct order.
// • Log the result for a few test cases.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const mapping = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

     for (let i = 0; i < s.length; i++) {
       if(mapping[s[i]]){
            stack.push(mapping[s[i]]);
       }
       else if(s[i] !== stack.pop()){
            return false;
       }
    }

    return !stack.length;
};