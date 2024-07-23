// 1. promise resolve
const promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

promise1.then(message => {
    console.log(message);
});

// 2. rejection promise
const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Promise rejected after 2 seconds"));
    }, 2000);
});

promise2.catch(error => {
    console.error(error.message);
});

// 3. chaining promises example
const fetchData = (message, delay) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

fetchData("Fetching data from server 1", 1000)
    .then(message => {
        console.log(message);
        return fetchData("Fetching data from server 2", 2000);
    })
    .then(message => {
        console.log(message);
        return fetchData("Fetching data from server 3", 3000);
    })
    .then(message => {
        console.log(message);
    });

// 4. Async await instead of promise then catch
const promise3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Resolved value from promise3");
    }, 2000);
});

const asyncFunction1 = async () => {
    const result = await promise3;
    console.log(result);
};

asyncFunction1();

// 5. handling rejected promise
const promise4 = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Rejected value from promise4"));
    }, 2000);
});

const asyncFunction2 = async () => {
    try {
        const result = await promise4;
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
};

asyncFunction2();

// 6. public API response using fetch() and then
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Public API data is:\n");
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// 7. public API response using fetch() and async await
const fetchDataAsync = async () => {
    try {
        const response = await fetch(
            "https://api.github.com/users/princebansal7"
        );
        const data = await response.json();
        console.log("Public API data is (async await):\n");
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
};

fetchDataAsync();

// 8. promise.all() use: waits for all promises to resolve and then logs their value
const promiseA = new Promise(resolve =>
    setTimeout(() => resolve("Promise A resolved"), 1000)
);
const promiseB = new Promise(resolve =>
    setTimeout(() => resolve("Promise B resolved"), 2000)
);
const promiseC = new Promise(resolve =>
    setTimeout(() => resolve("Promise C resolved"), 3000)
);

Promise.all([promiseA, promiseB, promiseC]).then(values => {
    console.log(values); // ["Promise A resolved", "Promise B resolved", "Promise C resolved"]
});

// 9. promise.race() use: gets the 1st promises which gets resolved the quickest among multiple promises
const promiseX = new Promise(resolve =>
    setTimeout(() => resolve("Promise X resolved"), 1000)
);
const promiseY = new Promise(resolve =>
    setTimeout(() => resolve("Promise Y resolved"), 2000)
);
const promiseZ = new Promise(resolve =>
    setTimeout(() => resolve("Promise Z resolved"), 500)
);

Promise.race([promiseX, promiseY, promiseZ]).then(value => {
    console.log(value); // "Promise Z resolved"
});
