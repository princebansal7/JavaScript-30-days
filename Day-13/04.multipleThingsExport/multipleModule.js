// utils.js
const PI = 3.14;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const car = {
    color: "black",
    gear: 5,
    type: "sports",
};

export default function multiply(a, b) {
    return a * b;
}

module.exports = { PI, add, subtract, car };
