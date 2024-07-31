//Activity - 03  Grouping and Capturing

//Task - 05
// Write a regular expression to capture the area code, central office code, and line number from a US phone number format
// (e.g., (123) 456-7890). Log the captures.
const phoneNumber  = "(123) 456-7890";

const regularEx = /^\((\d{3})\) (\d{3})-(\d{4})$/;

const match = phoneNumber.match(regularEx);

if(match){
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match;
    console.log('Full Match:', fullMatch);
    console.log('Area Code:', areaCode);
    console.log('Central Office Code:', centralOfficeCode);
    console.log('Line Number:', lineNumber);
}
else{
    console.log('No match found.');
}
console.log(`END OF TASK-05`);


//Task - 06
// Write a regular expression to capture the username and domain from an email address. Log the captures.
const email = "username@example.com";

const regex = /^([^@]+)@([^@]+\.[a-zA-Z]{2,})$/;

const match2 = email.match(regex);

if (match2) {
    const [fullMatch, username, domain] = match2;
    console.log('Full Match:', fullMatch);
    console.log('Username:', username);
    console.log('Domain:', domain);
} else {
    console.log('No match found.');
}

