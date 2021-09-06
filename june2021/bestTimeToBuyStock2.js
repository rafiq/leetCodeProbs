
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let total = 0;
    let bought = false;
    let buy = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            if (!bought) {
                buy = prices[i];
                bought = true;
            } else {
                continue;
            }
        } else if (bought) {
            total += prices[i] - buy
            bought = false;
            buy = 0;
        }
    }
    return total;
};
console.log(
    maxProfit([7,1,5,3,6,4]),
    maxProfit([1,2,3,4,5]),//4
    maxProfit([7,6,4,3,1]),//0
    )
