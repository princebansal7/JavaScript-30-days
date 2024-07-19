// Arrow functions do not have 'this'
// no need to write return keyword if do not have much statements in body
// no need to use {} to represent function body
// if single argument, no need to write it in parantheses
// extra:
// ( or ) => paranthesis (singular)
// () => parantheses (plural)

// Expample-1:
const getAge = age => 2024 - age;
console.log(getAge(1998));

// Example-2:
// More than 1 args => need parantheses
const getSum = (a, b) => a + b;
console.log(getSum(60, 9));

// Example-3:
// Have multiple statements and more than 1 args
// => need to write body in {}
// => args in ()
// => need to use return keyword

const checkVal = (ch, str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) {
            return true;
        }
    }
    return false;
};
console.log(checkVal("m", "princebansal"));
