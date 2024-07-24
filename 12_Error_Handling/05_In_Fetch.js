//Activity - 04  Graceful Error handling in fetch

//Task - 08
// Use the fetch API to request data from an invalid URL and handle the error using •catch() . Log an appropriate error message to the console.
function InvaidUrl() {
    const invaidURL = 'https://example.com/invalid-url';

    return fetch(invaidURL)
        .then((Response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return Response.json();
        })
        .then((data) => {
            console.log('Data fetched successfully:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error fetching data:', error.message);
        })
}
InvaidUrl()


//Task - 09
// Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an
// appropriate error message.
async function CheckInvalidURL(){
    try {
        const URL = 'https://example.com/invalid-url';

        const response = await fetch(URL);

        if(!response.ok)
        {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}
CheckInvalidURL();