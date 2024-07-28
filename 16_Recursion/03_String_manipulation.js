//Activity - 03  String manipulation with Recursion

//Task - 05
// write a recursion function for reverse string
function reverseString(str) {
    if (str.length === 0) {
        return str;
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
}

console.log(reverseString([2, 5, 7, 2, 6]));
console.log(reverseString('HELLO WORLD'));
console.log(`END OF TASK-05`);


//Task - 06
// write a recursion function to check string is  palindrome or not

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome('abcddcba'));
console.log(isPalindrome('hello'));


