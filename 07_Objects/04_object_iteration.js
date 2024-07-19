//Activity - 05  object iteration

//Task - 8  
//use for...in loop and iterate in object
const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    getInfo: function () {
        return this.title + " by " + this.author + " was published in " + this.year
    }
}
for (const i in book) {
   console.log(`${i} : ${book[i]}`)
}
console.log(`END OF TASK-8`);


//Task - 9
//use object.keys and object.values to print
const book1= {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997
}
Object.keys(book1).forEach((key) => {
    console.log(`keys : ` + key);
})
Object.values(book1).forEach((value) => {
    console.log(`values : ` + value);
})
//key and values together
Object.keys(book1).forEach((key) => {
    console.log(`${key} : ${book1[key]}`);
})

