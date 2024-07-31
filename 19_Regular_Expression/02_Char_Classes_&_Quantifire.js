//Activity - 02  Character Classes and Quantifiers

//Task - 03
// Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const str = "JavaScript is a powerful language. Python and Java are also popular.";

const regularEx = /\b[A-Z][a-zA-Z]*\b/g;

const result = str.match(regularEx);

console.log(result);


//Task - 04
// Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const str2 = "The year 2024 has 12 months, 7 days a week, and 24 hours in a day.";

const regularEx2 = /\d+/g;

const result2 = str2.match(regularEx2);

console.log(result2);