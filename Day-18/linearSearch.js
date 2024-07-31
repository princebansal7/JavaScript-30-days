function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("Index of target:", i);
            return;
        }
    }
    console.log("Target not found");
}

linearSearch([64, 34, 25, 12, 22, 11, 90], 25);
