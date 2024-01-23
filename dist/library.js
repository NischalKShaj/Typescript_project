"use strict";
const library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        readingStatus: true,
    },
    {
        title: "Walter Isaacson",
        author: "Steve Jobs",
        readingStatus: true,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
    },
];
for (let books of library) {
    if (books.readingStatus === true) {
        console.log(`You already read the book ${books.title} by ${books.author}`);
    }
    else {
        console.log(`You still need to read the book ${books.title} by ${books.author}`);
    }
}
