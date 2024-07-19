//Activity - 04  This keyword

//Task - 7
//create a object and log
let library = {
    name: "Town Library",
    books: [
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            year: 1997,
            getInfo: function () {
                return this.title + " by " + this.author + " was published in " + this.year
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getInfo: function () {
                return this.title + " by " + this.author + " was published in " + this.year
            }
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            year: 1951,
            getInfo: function () {
                return this.title + " by " + this.author + " was published in " + this.year
            }
        },

    ]

}

library.books.forEach((book) => {
    console.log(book.getInfo());
})

//single object
const book = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    getInfo: function () {
        return this.title + " by " + this.author + " was published in " + this.year
    }
}
console.log(book.getInfo());

