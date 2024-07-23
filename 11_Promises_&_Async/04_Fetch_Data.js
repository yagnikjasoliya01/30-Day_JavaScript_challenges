//Activity - 04  fetching data from API

//Task - 06
//Use the fetch API to get data from a public API and log the response data to the console using promises.
function fetchDataFromAPI(){
    const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
    return fetch(apiURL)
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        return data;
    })
    .catch((error) => {
        console.error('Error fetching data:', error)
        throw error;
    })
    
}

fetchDataFromAPI();

//Task - 06
// Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchDataFromAPI1(){
    try{
        const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

    const response = await fetch(apiURL)

    if(!response.ok)
    {
        throw new Error('Network response was not ok');
    }

    const data = await response.json();

    console.log('Response data:', data);

    return data;
    }

    catch(error){
        console.error('Error fetching data:', error)
        throw error;
    }
    
}

fetchDataFromAPI1();