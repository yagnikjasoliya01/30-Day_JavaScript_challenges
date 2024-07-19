//Activity - 01  creation and access of object

//Task - 1
//create a object and log
const book = {
    title: "Can't hurt me",
    author: "david goggins",
    year: 1999
}
console.log(book);

//Task - 2
//access the title and author log
console.log(`Title is : ` + (book.title));
console.log(`author name is : ` + (book.author));
console.log(`END OF TASK-2`);


//Activity - 02  object Methods

//Task - 3
//create a object and log
const book2 = {
    title: "Can't hurt me",
    author: "david goggins",
    year: 1999,

    getInfo: function(){
        return `Book title is : ${this.title} and author name : ${this.author} `
    }
}
console.log(book2.getInfo());

//Task - 4
//create a object and log
const book3 = {
    title: "Can't hurt me",
    author: "david goggins",
    year: 1999,

    getYear: function(year){
        return this.year = year
    }
}
console.log(`Book year is : ${book3.getYear(2020)}`);