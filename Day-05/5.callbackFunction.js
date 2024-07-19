// In JavaScript, a higher-order function is a function that can accept other functions as arguments,
// return functions, or both. They enable abstraction, composition, and the creation of more flexible and
// reusable code.

function higherOrderFxn(greeting, numberOfTimes) {
    for (let i = 1; i <= numberOfTimes; i++) {
        greeting(i);
    }
}
function greeting(val) {
    console.log("Hello ", val);
}
higherOrderFxn(greeting, 4);

// write an higher order function that takes 2 functions and a value is args, applies first function
// to the value and then applies second function to the result
// My Example

function fxn(cb1, cb2, name) {
    const greet = cb1(name);
    cb2(greet);
}

function cb1(value) {
    return `Hello ${value}, Welcome!`;
}

function cb2(greetArg) {
    console.log("Greeting is: ", greetArg);
}

fxn(cb1, cb2, "Prince");

// ChatGpt example:
function composeTwoFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

// Example functions
function addFive(x) {
    return x + 5;
}

function multiplyByThree(x) {
    return x * 3;
}

// Using the higher-order function
const initialValue = 10;
const result = composeTwoFunctions(addFive, multiplyByThree, initialValue);

console.log(result); // Output: (10 + 5) * 3 = 45
