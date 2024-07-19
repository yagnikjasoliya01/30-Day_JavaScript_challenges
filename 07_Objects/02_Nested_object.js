//Activity - 03 Nested object

//Task - 5
//create a object(library) and log
const library ={
    name:"library",
        books : [
            {
                title:"book1",
                author:"author1",
            },
            {
                title:"book2",
                author:"author2",
            },
            {
                title:"book3",
                author:"author3",
            }
        ]
}
console.log(library);
console.log(`END OF TASK-5`);

//Task - 6
//access and log 
console.log(library.name);

library.books.forEach((book) => {
    console.log(book.title);
    console.log(book.author);
})
