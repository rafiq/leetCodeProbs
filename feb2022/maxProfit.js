/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // let max = 0;
    // let i = 0;

    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {

    //         if (prices[j] - prices[i] > max) max = prices[j] - prices[i];
    //     }
    // }
    // return max;

    let dp = [0]
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[i - 1]
        dp[i] = Math.max(dp[i - 1], 0) + profit
    }
    return Math.max(...dp)
};

console.log(
    maxProfit([7,1,5,3,6,4]),
    maxProfit([7,6,4,3,1]),
);