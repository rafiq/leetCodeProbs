/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    // let result = [];

    // coins = coins.sort((a,b) => b - a)

    // for (let coin of coins) {
    //     while (amount >= coin) {
    //         // console.log(amount,coin,result);
    //         result.push(coin);
    //         amount -= coin;
    //     }
    // }

    // if (coins.includes(amount)) return result.length + 1;
    // else return amount ? -1 : result.length;

    let dp = new Array(amount + 1);
    dp[0] = 0; // base case
    for (let i = 1; i <= amount; i++) {
        let minCoins = Infinity;
        for (let coin of coins) {
            if (i-coin >= 0 && dp[i-coin] !== undefined && dp[i-coin] !== -1) {
                minCoins = Math.min(minCoins, dp[i - coin] + 1);
            }
        }
        dp[i] = minCoins === Infinity ? -1 : minCoins;
    }
    return dp[amount];
};

console.log(
    coinChange([1,2,5], amount = 11),
    coinChange([2], amount = 3),
    coinChange([1], amount = 0),
    coinChange([186,419,83,408]
        ,6249),
);

var coinChange = function(coins, amount) {
    // memo[i] is the min number of coins to make up amount i
    let memo = new Array(amount + 1);
    return coinChangeHelper(coins, amount, memo);
    // T.C: O(k*N), k = number of coins, N = amount
    // S.C: O(N)
}

// returns the min number of coins to make up amount
const coinChangeHelper = (coins, amount, memo) => {
    if (amount === 0) {
        return 0;
    }
    if (memo[amount] !== undefined) {
        return memo[amount];
    }
    let minCoins = Infinity;
    for (let coin of coins) {
        if (amount - coin >= 0) {
            let prevAmountCoins = coinChangeHelper(coins, amount - coin, memo);
            if (prevAmountCoins !== -1) {
                minCoins = Math.min(minCoins, prevAmountCoins + 1);
            }
        }
    }
    if (minCoins === Infinity) {
        minCoins = -1;
    }
    memo[amount] = minCoins;
    return minCoins;
}