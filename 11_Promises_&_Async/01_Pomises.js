//Activity - 01  understanding Promises

//Task - 01
//create promises that resolve
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved')
        }, 2000)
})

mypromise.then((message) => {
    console.log(message);
  });



//Task - 02
//create promises that reject
const mypromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise rejected after 2 seconds')
        }, 3000)
})

mypromise1.catch((error) => {
    console.error("error" , error);
  });