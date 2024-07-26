// should have the same name as we are exporting
const { add, subtract } = require("./multipleFxnModule");

console.log("Sum is:", add(9, 3));
console.log("subtraction is:", subtract(12, 3));
