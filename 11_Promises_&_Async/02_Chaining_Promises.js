//Activity - 02  Chaining Promises

//Task - 03
//create sequence of promises 
function fetchdata1(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data 1 fetched");
        },1000)
    })
}

function fetchdata2(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data 2 fetched");
        },1500)
    })
}

function fetchdata3(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Data 3 fetched");
        },2000)
    })
}

fetchdata1()
.then((message) => {
    console.log(message);
    return fetchdata2();
})
.then((message) => {
    console.log(message);
    return fetchdata3();
})
.then((message) => {
    console.log(message);
    console.log("All data fetched successfully!");
})
.catch((error) => {
    console.error("Error fetching data:", error)
})