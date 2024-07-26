// main.js
const _ = require("lodash");
const axios = require("axios");

const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice());
console.log(`Reversed array: ${reversedArray}`);

axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
