//Activity - 04  named and default exports

//Task - 06
//Install a third-party module (e.g., lodash) using pm. Import and use a function from this module in a script.
const {upperCase} = require('lodash');

let result = upperCase("my name is yagnik");//for install localy -- npm install lodash
console.log(result);


//Task - 07
// Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
const axios = require('axios');

const URL = 'https://api.github.com/users/octocat';

axios.get(URL)
.then((Response) => {
    console.log('Response data:');//for install localy -- npm install axios
    console.log(response.data);
})
.catch((error) => {
    console.error('Error fetching data:', error)
})