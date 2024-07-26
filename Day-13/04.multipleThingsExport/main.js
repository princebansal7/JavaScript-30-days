// main.js
const utils = require("./multipleModule");
const mul = require("./multiply");

console.log(`PI: ${utils.PI}`);
console.log(`Sum: ${utils.add(5, 3)}`);
console.log(`Difference: ${utils.subtract(5, 3)}`);
console.log(`
About car:
    Car info data type: ${utils.car}
    Car info: ${JSON.stringify(utils.car)}
    Color: ${utils.car.color}
    Gears: ${utils.car.gear}
    Car type: ${utils.car.type}
    `);

// Default import
console.log("Multiplication is: ", mul(3, 5));
