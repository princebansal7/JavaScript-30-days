// default value will always be from last R.H.S
// there can be no args who doesn't have default value after default args

// Example-1
const prod = function (val1, val2 = 69) {
    return val1 * val2;
};
console.log(prod(10));
console.log(prod(23, 20));

// Example-2
const greeting = function (name, age = 26) {
    return `Welcome! ${name}, your age is ${age}`;
};
console.log(greeting("Prince"));
