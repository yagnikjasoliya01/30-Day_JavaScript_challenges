// Function to save form data to localStorage
function saveFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Save the data as a JSON string
    const userData = JSON.stringify({ name, email });
    localStorage.setItem('userData', userData);
}

// Function to display saved data
function displaySavedData() {
    const resultDiv = document.getElementById('result');
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString);
        resultDiv.innerHTML = `<p><strong>Name:</strong> ${userData.name}</p>
                               <p><strong>Email:</strong> ${userData.email}</p>`;
    } else {
        resultDiv.innerHTML = '<p>No data saved yet.</p>';
    }
}

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    saveFormData();        // Save the form data to localStorage
    displaySavedData();   // Display the saved data
});

// Display saved data on page load
window.onload = displaySavedData;
