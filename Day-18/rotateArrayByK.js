function rotateArray(arr, k) {
    k = k % arr.length;
    const rotated = [...arr.slice(-k), ...arr.slice(0, -k)];
    console.log("Rotated Array:", rotated);
}

rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
