// 1. Create a closure that maintains a private counter
function createCounter() {
    let counter = 0;

    return {
        increment: function () {
            counter++;
            console.log(`Counter: ${counter}`);
        },
        setCounter: function (value) {
            counter = value;
            console.log(`Counter set to: ${counter}`);
        },
        getCounter: function () {
            return counter;
        },
    };
}

// Usage
const counterClosure = createCounter();
counterClosure.increment(); // Counter: 1
counterClosure.increment(); // Counter: 2
counterClosure.setCounter(5); // Counter set to: 5
console.log(counterClosure.getCounter()); // 5

//2. creates unique id
function createIDGenerator() {
    let lastID = 0;

    return function () {
        lastID++;
        return lastID;
    };
}

// Usage
const generateID = createIDGenerator();
console.log(generateID()); // 1
console.log(generateID()); // 2
console.log(generateID()); // 3

//3. Create a closure that captures a user’s name and returns a function that greets the user by name
function createGreeter(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

// Usage
const greetAlice = createGreeter("Alice");
greetAlice(); // Hello, Alice!

const greetBob = createGreeter("Bob");
greetBob(); // Hello, Bob!

//4. Write a loop that creates an array of functions
function createFunctionArray() {
    const functionArray = [];

    for (let i = 0; i < 5; i++) {
        functionArray.push(function () {
            console.log(i);
        });
    }

    return functionArray;
}

// Usage
const functions = createFunctionArray();
functions[0](); // 0
functions[1](); // 1
functions[2](); // 2
functions[3](); // 3
functions[4](); // 4

// 5. Use closures to create a simple module for managing a collection of items
const itemManager = (function () {
    const items = [];

    return {
        addItem: function (item) {
            items.push(item);
            console.log(`Added: ${item}`);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
                console.log(`Removed: ${item}`);
            } else {
                console.log(`Item not found: ${item}`);
            }
        },
        listItems: function () {
            console.log("Items:", items);
        },
    };
})();

// Usage
itemManager.addItem("Item1"); // Added: Item1
itemManager.addItem("Item2"); // Added: Item2
itemManager.listItems(); // Items: [ 'Item1', 'Item2' ]
itemManager.removeItem("Item1"); // Removed: Item1
itemManager.listItems(); // Items: [ 'Item2' ]

// 6. Write a function that memoizes the results of another function
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

// Example usage
const slowFunction = num => {
    console.log("Computing...");
    return num * 2;
};

const memoizedFunction = memoize(slowFunction);
console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // 10 (from cache)

// 7. Create a memoized version of a function that calculates the factorial of a number
function memoizeFactorial(fn) {
    const cache = {};

    return function (n) {
        if (cache[n]) {
            return cache[n];
        } else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    };
}

const factorial = memoizeFactorial(function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
});

// Usage
console.log(factorial(5)); // 120
console.log(factorial(6)); // 720
console.log(factorial(5)); // 120 (from cache)
