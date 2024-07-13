var num1 = 69;
console.log(num1);
let name = "prince";
console.log(name);
const isTrue = false;
console.log(isTrue);

let n1 = 3;
let n2 = 3.2;
let n3 = "str";
let n4 = true;
let n5 = [1, 2, 3, "hello"];
let n6 = { name: "Prince", lastName: "Bansal" };
let n7 = new Array("Saab", "Volvo", "BMW");
console.log("value is: " + n1 + ", type is: " + typeof n1);
console.log("value is: " + n2 + ", type is: " + typeof n2);
console.log("value is: " + n3 + ", type is: " + typeof n3);
console.log("value is: " + n4 + ", type is: " + typeof n4);
console.log("value is: " + n5 + ", type is: " + typeof n5);
console.log("value is: " + n6 + ", type is: " + typeof n6);
console.log("value is: " + n7 + ", type is: " + typeof n7);

let changeVal = "initial val";
console.log(changeVal);
changeVal = 69;
console.log(changeVal);

const valueStays = 99; // const values must be initialized
console.log(valueStays);
// valueStays = 39; // TypeError: Assignment to constant variable => can't initialise again
console.log(valueStays);
