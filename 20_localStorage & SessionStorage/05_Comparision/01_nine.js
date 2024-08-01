//Activity - 05  comparision between localstorage and sessionstorage

//Task - 09
// Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and
// log the values from both storage mechanisms.
          /**
         * Saves a value to both localStorage and sessionStorage and logs the values.
         * @param {string} key - The key under which the value will be stored.
         * @param {string} value - The value to be stored.
         */
         
        function saveAndLog(key, value) {
            // Save the value to localStorage
            localStorage.setItem(key, value);
            // Save the value to sessionStorage
            sessionStorage.setItem(key, value);

            // Retrieve the values from localStorage and sessionStorage
            const localStorageValue = localStorage.getItem(key);
            const sessionStorageValue = sessionStorage.getItem(key);

            // Log the values
            console.log(`localStorage value for '${key}': ${localStorageValue}`);
            console.log(`sessionStorage value for '${key}': ${sessionStorageValue}`);
        }

        // Example usage of the function
        saveAndLog('exampleKey', 'exampleValue');