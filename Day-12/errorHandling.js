// Example-1
function throwError() {
    throw new Error("This is an intentional error!");
}

try {
    throwError();
} catch (error) {
    console.log("Caught an error:", error.message);
}

// Example-2
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
try {
    const result = divideNumbers(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("Caught an error:", error.message);
}

// Example-3
try {
    console.log("In the try block");
    throw new Error("Something went wrong");
} catch (error) {
    console.log("In the catch block:", error.message);
} finally {
    console.log("In the finally block");
}

// Example-4
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error");
}

try {
    throwCustomError();
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// Example-5
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty");
    }
    return true;
}

try {
    validateInput("");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`${error.name}: ${error.message}`);
    } else {
        console.log("An unexpected error occurred:", error.message);
    }
}

// Example-6
const randomPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected with an error");
    }
});

randomPromise
    .then(message => console.log(message))
    .catch(error => console.log("Caught an error:", error));

// Example-7
async function handleRandomPromise() {
    try {
        const message = await randomPromise;
        console.log(message);
    } catch (error) {
        console.log("Caught an error:", error);
    }
}

handleRandomPromise();

// Example-8
fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=4")
    .then(response => response.json())
    .catch(error => console.log("Fetch error:", error));

// Example-9
async function fetchData() {
    try {
        const response = await fetch(
            "https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=4"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Fetch error:", error);
    }
}

fetchData();
