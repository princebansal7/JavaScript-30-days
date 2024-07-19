const books = { title: "Java", author: "Jenice alice", price: 399, year: 1908 };
console.log(books); // { title: 'Java', author: 'Jenice alice', price: 399, year: 1908 }
console.log(books.title); // Java
console.log(books["price"]); // 399
console.log(books["year"]); // 1908
books["price"] = 900;
console.log(books); // { title: 'Java', author: 'Jenice alice', price: 900, year: 1908 }
books.price = 69.02;
console.log(books); // { title: 'Java', author: 'Jenice alice', price: 69.02, year: 1908 }
books["newKey"] = "newValue";
console.log(books);
// {
//   title: 'Java',
//   author: 'Jenice alice',
//   price: 69,
//   year: 1908,
//   newKey: 'newValue'
// }

// Example-2

const books2 = {
    title: "Java",
    author: "Jenice alice",
    price: 399,
    year: 2000,
    getData: function () {
        return `${books2.title} is written by ${books2.author} and costs RS ${books2.price}`;
    },
    updateYear: function (year) {
        books2.year = year;
    },
};
console.log(books2.getData); // returns fxn: [Function: getData]
console.log(books2.getData()); // Java is written by Jenice alice and costs RS 399
books2.updateYear(1969);
console.log(books2);
// {
//   title: 'Java',
//   author: 'Jenice alice',
//   price: 399,
//   year: 1969,
//   getData: [Function: getData],
//   updateYear: [Function: updateYear]
// }

console.log();
console.log();
// Nested Object
const library = {
    name: "City Library",
    books: [
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "1984", author: "George Orwell" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    ],
};

console.log("Library Object:", library);
console.log("Library Name:", library.name);
console.log("Book Titles:");
library.books.forEach(book => {
    console.log(book.title);
});

console.log();
console.log();
// example 'this'
const books3 = {
    title: "Lallala",
    author: "alice",
    price: 391,
    year: 2000,
    getData: function () {
        return `${this.title} is written by ${this.author} and costs RS ${this.price}`;
    },
    updateYear: function (year) {
        this.year = year;
    },
};
console.log(books3.getData()); // Lallala is written by alice and costs RS 391

console.log();
console.log();
// example
// Creating a book object
const books4 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    genre: "Fiction",
};

console.log();
console.log();
for (let property in books4) {
    console.log(`${property}: ${books4[property]}`);
}
// title: To Kill a Mockingbird
// author: Harper Lee
// publishedYear: 1960
// genre: Fiction

const keys = Object.keys(books4);
const values = Object.values(books4);

console.log("Keys:", keys); // Keys: [ 'title', 'author', 'publishedYear', 'genre' ]
console.log("Values:", values); // Values: [ 'To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction' ]
