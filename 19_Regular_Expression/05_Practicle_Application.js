//Activity - 05  Practicle Application

//Task - 09
// Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter,
// one digit, and one special character). Log whether the password is valid.

// Define the regular expression pattern
const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// Sample passwords to test
const passwords = [
    "Password1!",
    "passWord1!",
    "PASSWORD1!",
    "Password!",
    "password1!",
    "P@ssw0rd",
    "P@ssw0rd1",
    "12345678",
    "abcDEF!",
    "validPassword1!"
];

// Function to validate and log passwords
passwords.forEach(pw => {
    const isValid = pattern.test(pw);
    console.log(`Password: '${pw}'`);
    console.log(`Valid: ${isValid}\n`);
});

//Task - 10
// Write a regular expression to validate a URL. Log whether the URL is valid.

const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[a-zA-Z0-9&%_.-]*)*\/?$/;
                    //Regular Expression for URL