function countCharacterOccurrences(str) {
    const counts = {};
    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    console.log("Character counts:", counts);
}

countCharacterOccurrences("hello world");
