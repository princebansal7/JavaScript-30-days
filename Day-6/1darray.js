let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // accessing 1st element
console.log(arr[4]); // accessing last element
console.log(arr[arr.length - 1]); // accessing last element

// array methods
arr.push(69); // adds element in last
console.log(arr);
arr.pop(); // removes last element
console.log(arr);
arr.shift(); // removes 1st element
console.log(arr);
arr.unshift(69); // add element in beginning
console.log(arr);
arr.sort(); // sorts the array (increasing order)
console.log(arr);
arr.sort((a, b) => b - a); // sorts the array (decreasing order)
console.log(arr);
arr.reverse(); // reverses the array
console.log(arr);
arr.fill(69); // fills array with provided input
console.log(arr);

// es6 methods (Array Helpers)-----------
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map() => return new array after doing after some manipulations with old array elements
const doubledArr = arr.map(val => {
    return 2 * val;
});
console.log(doubledArr);

// filter() => returns new array after a certain condition is met on old array elements
const odd = arr.filter(val => {
    if (val % 2) return true;
});
console.log(odd);

// reduce() => executes a user-supplied "reducer" callback function on each element of the array
// Now, Understanding reduce() array helper method:------------------------
// reduce(): here we pass some initial value too with iterator function

// Working:
//   A) 1st argument's (sumNew) value comes from initial value (initialVal),
//      and 2nd argument's (number) value comes from array elements one by one.
//   B) Then each time sumNew gets iteratered to new iterations

let numbers = [10, 20, 30, 40, 50];
let initialVal = 0;
let result = numbers.reduce(function (sumAccumulator, number) {
    return sumAccumulator + number;
}, initialVal);

console.log(result); // 150

// Example-2:
let desks = [
    { type: "sitting" },
    { type: "standing" },
    { type: "sitting" },
    { type: "sitting" },
    { type: "standing" },
];
const evalTypeOfTables = function (accumulatorObj, desk) {
    if (desk.type === "sitting") {
        accumulatorObj.sitting++;
    } else {
        accumulatorObj.standing++;
    }
    return accumulatorObj;
};
const initialValue = { sitting: 0, standing: 0 };
const deskTypes = desks.reduce(evalTypeOfTables, initialValue);
console.log(deskTypes); // { sitting: 3, standing: 2 }

// iterating using for and forEach
numbers = [10, 20, 30, 40, 50, 90];

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    // or (to print in same line)
    process.stdout.write(numbers[i].toString() + " ");
}

console.log();

numbers.forEach(val => {
    // console.log(val);
    // or (to print in same line)
    process.stdout.write(val.toString() + " ");
});
console.log();
