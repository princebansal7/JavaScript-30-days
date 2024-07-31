function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let w = capacity; w >= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }

    console.log("Maximum value in knapsack:", dp[capacity]);
}

knapsack([1, 2, 3], [60, 100, 120], 5);
