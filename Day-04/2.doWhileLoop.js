let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Factorial
let val = 10;
let temp = val;
let factorial = 1;
if (val == 0) {
    console.log(`${temp}! = ${1}`);
} else if (val > 0) {
    do {
        factorial = factorial * val;
        val--;
    } while (val > 0);
    console.log(`${temp}! = ${factorial}`);
} else {
    console.log("Invalid value");
}
