function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let start = 0;
    const map = new Map();

    for (let end = 0; end < str.length; end++) {
        if (map.has(str[end])) {
            start = Math.max(map.get(str[end]) + 1, start);
        }
        map.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    console.log(
        "Length of longest substring without repeating characters:",
        maxLength
    );
}

longestSubstringWithoutRepeating("abcabcbb");
