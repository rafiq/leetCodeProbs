/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    const getSquares = num => {
        let result = [];
        let sum = 1;

        while (sum < num) {
            if (Math.sqrt(sum) % 1 === 0) {
                result.push(sum)
            }
            sum++
        }
        return result
    }

    let squaresArray = getSquares(n);

    let dp = Array(n + 1).fill(0);
    dp[0] = 1;

    for (let num of squaresArray) {
        for (let i = 1; i < dp.length; i++) {
            dp[i] += dp[i - num] !== undefined ? dp[i - num] : 0;
        }
    }

    return Math.min(...dp)
};
console.log(
    numSquares(12)
);

var numSquares = function (n) {
    if (Math.floor(n ** 0.5) === Math.ceil(n ** 0.5)) {
      return 1;
    }
    return dfs(n);
  };

  const dfs = (n, memo = new Map()) => {
    if (n <= 3) return n

    if (memo.has(n)) {
      return memo.get(n);
    }
    let min = Infinity;
    for (let i = 1; i <= Math.floor(n ** 0.5); i++) {
      min = Math.min(min, 1 + dfs(n - i ** 2, memo));
    }
    memo.set(n, min);
    return min;
  };
//   const dfs = (n, memo = new Map()) => {
//     if (n === 0) {
//       return 0;
//     }
//     if (n < 0) {
//       return Infinity;
//     }
//     if (memo.has(n)) {
//       return memo.get(n);
//     }
//     let min = Infinity;
//     for (let i = 1; i <= Math.floor(n ** 0.5); i++) {
//       min = Math.min(min, 1 + dfs(n - i ** 2, memo));
//     }
//     memo.set(n, min);
//     return min;
//   };
  // DP
  // dp[i] is the least number of perfect square numbers that sum to i
  var numSquares = function (n) {
    if (Math.floor(n ** 0.5) === Math.ceil(n ** 0.5)) {
      return 1;
    }
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i < dp.length; i++) {
      for (let j = 1; j <= Math.floor(i ** 0.5); j++) {
        // try every possible perfect square and get the least size of numbers
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
    return dp[n];
    // T.C: O(N)
    // S.C: O(N)
  };