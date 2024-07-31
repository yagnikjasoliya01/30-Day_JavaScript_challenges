//Activity - 04  Assertion and Boundaries

//Task - 07
// Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
// Sample strings
const pattern = /^\b\w+\b/;

const strings = [
    "hello world",
    "hello",
    "world hello",
    "  leading spaces",
    "start 123",
    "multiple words here",
    "here at the end"
];

strings.forEach(s => {
    const match = s.match(pattern);
    if (match) {
        console.log(`String: '${s}'`);
        console.log(`Match: '${match[0]}'\n`);
    } else {
        console.log(`String: '${s}'`);
        console.log("No match\n");
    }
});


//Task - 08
//Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const pattern1 = /\b\w+\b$/;

const strings1 = [
    "hello world",
    "hello",
    "world hello",
    "leading spaces ",
    "start 123",
    "multiple words here",
    "here at the end"
];

strings1.forEach(s => {
    const match = s.match(pattern1);
    if (match) {
        console.log(`String: '${s}'`);
        console.log(`Match: '${match[0]}'\n`);
    } else {
        console.log(`String: '${s}'`);
        console.log("No match\n");
    }
});