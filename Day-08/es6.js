// string interpolation
const myName = "prince";
const currentYear = 2024;
const role = "DevOps Engineer";
console.log(
    `Hello ${myName}, your age is ${
        currentYear - 1998
    }, your Profile is ${role}`
);

const multiLineExample = `
your Profile is ${role},
Writing is 2nd line!
Writing in 3rd line!`;
console.log(multiLineExample);

// Array Destructuring
const arr = [69, "prince"];
const [rollNum, namee] = arr;
console.log(rollNum);
console.log(namee);

// Object Destructuring
const books = { title: "Java", author: "Jenice alice", price: 399, year: 1908 };
const { title, author, year } = books;
console.log(title);
console.log(author);
console.log(year);

// spread operator
const colors = ["red", "blue", "green", "purple", "black"];
const numbers = [1, 2, 3, 4, 5];
console.log(...colors);
console.log(...numbers);
const mixed = [...numbers, ...colors];
console.log(mixed);

// spread operator
function getSumUptoN(...nums) {
    return nums.reduce((accumulator, num) => accumulator + num, 0);
}

console.log(getSumUptoN(1, 2, 3));
console.log(getSumUptoN(1));
console.log(getSumUptoN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(getSumUptoN(1, 2, 3, -1, -3, -5));

// default parameters
const prod = function (val1, val2 = 1) {
    return val1 * val2;
};
console.log(prod(23, 3));
console.log(prod(99));

// Enhanced object literals
const name = "Gadget";
const price = 99.99;

const product = {
    name,
    price,
    // Method shorthand
    displayInfo() {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    },
    // Regular method syntax
    calculateDiscountedPrice(discount) {
        return this.price - (this.price * discount) / 100;
    },
};

console.log(product);
product.displayInfo();
console.log("Discounted Price: $", product.calculateDiscountedPrice(10));

const propName1 = "name";
const propName2 = "price";

const productInfo = {
    [propName1]: "Gadget",
    [propName2]: 99.99,
    [`${propName1}Details`]: "High-quality electronic gadget",
};

console.log(productInfo);
