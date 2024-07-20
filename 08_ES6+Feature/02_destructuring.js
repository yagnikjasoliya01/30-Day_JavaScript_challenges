//Activity - 02  destructuring

//Task - 3
//array destructuring
const number = [1,2,3,4,5]

const [first,second] = number;
console.log(`first number is : ${first}`);
console.log(`second number is : ${second}`);

//Task - 4
//object destructuring
const book = {
    title : "can't hurt me",
    author : 'devid goggins',
    year: 1990
}

const {title , author} = book
console.log(`Title : ${title}`);
console.log(`author : ${author}`);