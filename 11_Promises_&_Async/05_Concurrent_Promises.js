//Activity - 05  Concurrent Promises

//Task - 08
//Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promises1 = new Promise((resolve ,reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000);
})
const promises2 = new Promise((resolve ,reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 1500);
})
const promises3 = new Promise((resolve ,reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 2000);
})

const myPromise = [promises1 ,promises2 , promises3];

Promise.all(myPromise)
.then((result) => {
    result.forEach((result) => {
        console.log(result);
    })
})
.catch((error) => {
    console.error('Error occurred:', error);
})


//Task - 09
//Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promise1 = new Promise((resolve ,reject) => {
    setTimeout(() => resolve('Promise 1 is resolved'), 1000);
})
const promise2 = new Promise((resolve ,reject) => {
    setTimeout(() => resolve('Promise 2 is resolved'), 1500);
})
const promise3 = new Promise((resolve ,reject) => {
    setTimeout(() => resolve('Promise 3 is resolved'), 2000);
})

const myPromises = [promise1 ,promise2 , promise3];

Promise.race(myPromises)
.then((firstPromise) => {
    console.log('First resolved promise:',firstPromise);
})
.catch((error) => {
    console.error('Error occurred: ' , error);
})
