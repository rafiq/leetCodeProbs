var change = function (amount, coins) {
    return dfs(coins, amount);
    // T.C: O(S*N), S = amount, N = # of coins
    // S.C: O(S*N)
  };

  const dfs = (coins, amount, idx = 0, memo = new Map()) => {
    if (amount === 0) {
      return 1;
    }
    if (amount < 0 || idx === coins.length) {
      return 0;
    }
    if (memo.has(`${idx}-${amount}`)) {
      return memo.get(`${idx}-${amount}`);
    }
    let count = 0;
    for (let i = idx; i < coins.length; i++) {
      count += dfs(coins, amount - coins[i], i, memo);
    }
    memo.set(`${idx}-${amount}`, count);
    return count;
  };

  var change = function (amount, coins) {
    // dp[i] is # of ways to make up i
    // dp[i] = dp[i-coin] + 1
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (let coin of coins) {
      for (let i = 1; i < dp.length; i++) {
        dp[i] += dp[i - coin] !== undefined ? dp[i - coin] : 0;
      }
    }
    return dp[amount];
    // T.C: O(S*N)
    // S.C: O(N)
  };