//Activity - 03  String algorithms

//Task - 06
// Write a function to count the occurrences of each character in a string. Log the character counts.
function countchar(str){
    let charCount = {};

    for(let char of str){
        if(charCount[char]){
            charCount[char]++;
        }
        else{
            charCount[char] = 1;
        }
    }

    return charCount;
}

let str = "hello world";
let result = countchar(str);

for(let char in result){
    console.log(`Character '${char}' occurs ${result[char]} times`);
}



//Task - 07
// Write a function to find the longest substring without repeating characters in a string. Log the length of the substring,
function longestUniqueSubstring(str) {
    let longest = 0;
    let left = 0;
    let charIndexMap = new Map();
    
    // Iterate through the string with the right pointer
    for (let right = 0; right < str.length; right++) {
        const currentChar = str[right];
        
        // If the character is already in the map and is within the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
            // Move the left pointer to the right of the last occurrence of currentChar
            left = charIndexMap.get(currentChar) + 1;
        }
        
        // Update the last occurrence of the current character
        charIndexMap.set(currentChar, right);
        
        // Calculate the length of the current substring
        const currentLength = right - left + 1;
        // Update the longest length if the current one is greater
        longest = Math.max(longest, currentLength);
    }
    
    return longest;
}

// Example usage
let str1 = "abcdeabcbb";
let length = longestUniqueSubstring(str1);

// Log the length of the longest substring without repeating characters
console.log(`Length of the longest substring without repeating characters is: ${length}`);
