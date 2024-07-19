// Hoisting
// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
//  You can use the function before you declared it

function checkNature(num) {
    num % 2 == 0 ? console.log("Even") : console.log("Odd");
}
checkNature(12);
checkNature(69);

function square(num) {
    return num * num;
}
console.log(square(12));
console.log(square(5));
