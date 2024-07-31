//Activity - 01  Basic Regular Expression

//Task - 01
// Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

const str = "JavaScript is a powerful language. Learning JavaScript can be fun and rewarding.";

const regularEx = /JavaScript/g;

const result = str.match(regularEx);

console.log(result);


//Task - 02
// Write a regular expression to match all digits in a string. Log the matches.

const str2 = "The year 2024 has 12 months, 7 days a week, and 24 hours in a day.";

const regularEx2 = /\d/g;

const result2 = str2.match(regularEx2);

console.log(result2);