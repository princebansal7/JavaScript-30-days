// src/index.js
import greet from "./greet";
import { add, subtract } from "./math";

console.log(greet("John"));
console.log(`Sum: ${add(5, 3)}`);
console.log(`Difference: ${subtract(5, 3)}`);

// This will generate a dist/bundle.js file which includes all the JavaScript code from the modules.
// You can then include this bundled file in an HTML file to see the output.
// use command: npx webpack
