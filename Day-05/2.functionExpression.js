// A function expression is very similar to, and has almost the same syntax as, a function declaration.
// The main difference between a function expression and a function declaration is the function name,
// which can be omitted in function expressions to create anonymous functions.
// A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as
// soon as it is defined. See also the chapter about functions for more information.

// Function expression hoisting:
// Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them:

const max = function (num1, num2) {
    const maxNum = num1 > num2 ? num1 : num2;
    console.log(maxNum);
};
max(23, 69);

const concat = function (str1, str2) {
    return str1 + str2;
};
console.log(concat("prince ", "bansal"));
