const arr = [
    [1, 2, 3, "Prince"],
    [4, 5, 6],
    [7, 8, 9, "Bansal"],
];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
    }
}

console.log();

const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
arr1.forEach(array1d => {
    array1d.forEach(val => {
        console.log(val);
    });
});

// Multiplication or 2 Arrays
function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error(
            "Number of columns in A must be equal to number of rows in B"
        );
    }

    const result = new Array(rowsA);
    for (let i = 0; i < rowsA; i++) {
        result[i] = new Array(colsB).fill(0);
    }

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Example usage:
const A = [
    [1, 2, 3],
    [4, 5, 6],
];

const B = [
    [7, 8],
    [9, 10],
    [11, 12],
];

const C = multiplyMatrices(A, B);

console.log(C);
// Output:
// [
//   [ 58,  64 ],
//   [139, 154]
// ]
