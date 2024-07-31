function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            console.log("Index of target:", mid);
            return;
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    console.log("Target not found");
}

binarySearch([11, 12, 22, 25, 34, 64, 90], 25);
