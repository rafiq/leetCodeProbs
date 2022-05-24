/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {

};
console.log(
    maxProfit(),
);
var maxProfit = function(prices) {
    if (prices === null || prices.length === 0) {
        return 0;
    }
    // empty[i] is the max profit on day i with the state of no stock
    // empty[i] = Math.max(empty[i-1], sold[i-1])
    let empty = new Array(prices.length);
    // hold[i] is the max profit on day i with the state of holding stock
    // hold[i] = Math.max(hold[i-1], empty[i-1]-prices[i])
    let hold = new Array(prices.length);
    // sold[i] is the max profit on day i with the state of having stock sold on day i
    // sold[i] = hold[i-1] + prices[i]
    let sold = new Array(prices.length);
    empty[0] = 0;
    hold[0] = -prices[0];
    sold[0] = 0;
    for (let i = 1; i < prices.length; i++) {
        empty[i] = Math.max(empty[i-1], sold[i-1]);
        hold[i] = Math.max(hold[i-1], empty[i-1]-prices[i]);
        sold[i] = hold[i-1] + prices[i];
    }
    // Among the last entries, hold[i] will be always the worst case,
    // since we are still holding stock and have no way of selling it now
    // as we've reached the last day on Earth
    return Math.max(empty[empty.length-1], sold[sold.length-1]);
    // T.C: O(N)
    // S.C: O(N)
};