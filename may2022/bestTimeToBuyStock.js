// [7,1,5,3,6,4]  --> [0,-6,4,-2,3,-2]
// The recurrence of the DP is:

// dp[i] = max(dp[i - 1], 0) + currProfit
// Once the previous sum is less than 0, we just add from the current profit. Otherwise, we add the previous profit sum since it is positive.

var maxProfit = function(prices) {
    let dp = [0]
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[i - 1]
        dp[i] = Math.max(dp[i - 1], 0) + profit
    }
    return Math.max(...dp)
};


var maxProfit = function(prices) {
    let maxProfit = 0;
    let buyingPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buyingPrice) {
            let tempProfit = prices[i] - buyingPrice;
            maxProfit = Math.max(maxProfit, tempProfit);
        }
        if (prices[i] < buyingPrice) {
            buyingPrice = prices[i];
        }
    }
    return maxProfit;
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

/*
Test Cases:
[3,7,0,1,2,2,3] => 4
[] => 0
[1] => 0 since we can't perform selling
[2, 1] => 0

Idea:
1. Create two variables, one of which will track the maximum possible profit so far and the other of which will track my buying price.
I initialise maximum profit to zero because we start with no profit, and I initialise my buying price to the first element of the array
since this is the first possible price I can buy a stock at.
2. Loop over every number in the array from the second element.
Every time I can make a profit (so when the current price is higher than the price I bought), I will compare the maximum profit so far
and the profit I can make through this transaction and update my tracking variable if I can make a higher profit through this transaction.
Also, every time I encounter a price lower that the price I bought, update my buying price to this lower price because I want to maximise my profit.
3. Return the maximum profit.

Time Complexity: O(n)
Space Complexity: O(1)
*/

