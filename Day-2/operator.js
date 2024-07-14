let a = 37;
let b = 4;
console.log(a + b); // 41
console.log(a - b); // 33
console.log(a * b); // 148
console.log(a / b); // 9.25
console.log(a % b); // 1

let val = 68;
val += 1;
console.log(val); // 69

let val2 = 70;
val2 -= 1;
console.log(val2); // 69

let val3 = 68;
val3 *= 2;
console.log(val3); // 136

let val4 = 70;
val4 /= 2;
console.log(val4); // 35

console.log(3 > 4); // false
console.log(3 < 4); // true
console.log(4 >= 5); // false
console.log(4 >= 4); // true
console.log(4 <= 5); // true
console.log(5 <= 5); // true
console.log(5 != 4); // true
console.log(5 != 5); // false

const num = 0;
const obj = new String("0");
const str = "0";

// == lose check - does type conversion
// === strict check - doesn't do type conversion

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num == obj); // true
console.log(num === str); // false
console.log(num == str); // true
console.log(obj === str); // false
console.log(obj == str); // true
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log(true && true); // true
console.log(false && true); // false: short-circuit evaluation: for && if first false => doesn't go to second conditon
console.log(true && false); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(false || true); // true: short-circuit evaluation: for || if first true => doesn't go to second conditon
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true

let num1 = 69;
const isPositive = num1 > 0 ? true : false;
console.log("positive:", num1, isPositive);

let num2 = -69;
const isNegative = num2 < 0 ? true : false;
console.log("negative:", num2, isNegative);
