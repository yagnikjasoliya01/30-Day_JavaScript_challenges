//Task - 10
// Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.
function clearAllStorage() {
    // Clear localStorage
    localStorage.clear();
    // Clear sessionStorage
    sessionStorage.clear();

    // Function to log the current state of storage
    function logStorage() {
        console.log('localStorage content after clear:');
        if (localStorage.length === 0) {
            console.log('localStorage is empty.');
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                console.log(`${key}: ${localStorage.getItem(key)}`);
            }
        }

        console.log('sessionStorage content after clear:');
        if (sessionStorage.length === 0) {
            console.log('sessionStorage is empty.');
        } else {
            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                console.log(`${key}: ${sessionStorage.getItem(key)}`);
            }
        }
    }

    // Log the storage content after clearing
    logStorage();
}

// Example usage of the function
// Save some data to both localStorage and sessionStorage for demonstration
localStorage.setItem('testLocalKey', 'testLocalValue');
sessionStorage.setItem('testSessionKey', 'testSessionValue');

// Clear all storage and verify
clearAllStorage();