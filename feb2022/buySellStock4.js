/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(k, prices) {
    let dp = Array(prices.length);
    dp[0] = 0;
    maxProfit = 0;
    let min = prices[0];
    let max = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];
        if (prices[i] > max) {
            max = prices[i];
        }
        if (prices[i] < max) {
            max = prices[i]
            min = prices[i]
        }
        let profit = max - min;
        dp[i] = Math.max(dp[i - 1], 0) + profit
    }
    // either add or not add each profit found
    return dp
};
console.log(
    maxProfit(2,[2,4,1]),
    maxProfit(2,[3,2,6,5,0,3]),
);

function maxProfit(k, prices) {

    let n = prices.length;

    if (k === 0 || n < 2) return 0; //Edge

    //Case I
    if (k >= n) { //Problem becomes Buy and Sell Stock II
        let res = 0;
        for (let i = 0; i < n; i++) {
            if (prices[i] < prices[i + 1]) res += (prices[i + 1] - prices[i]);
        }
        return res;
    }

    //Case II: Normal
    let buy = new Array(k + 1).fill(-Infinity);
    let sell = new Array(k + 1).fill(0);

    buy[0] = -prices[0]; //Investment on first day

    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= k; j++) {
            buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]); //Hold or Max Sell Profit of previous day - current price
            sell[j] = Math.max(sell[j], buy[j] + prices[i]);
        }
    }

    return sell[k];
}