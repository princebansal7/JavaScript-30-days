function quicksort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    return [...quicksort(left), ...middle, ...quicksort(right)];
}

console.log("Quick sorted Array:", quicksort([64, 34, 25, 12, 22, 11, 90]));
