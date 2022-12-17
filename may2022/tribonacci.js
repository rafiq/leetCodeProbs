/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    let dp = [0,1,1];
    let memo = {};

    if (n < 3) return dp[n];
    // This is the top down approach which starts from n and calculates every sub problem, but stores the answers to the sub problems in an memoization object for a more optimal performance, but more space.
    // Time: O(n)
    // Space: O(n)
    const helper = (num) => {
        if (num < 3) return dp[num];

        if (memo[num]) return memo[num];

        let result = helper(num - 3) + helper(num - 2) + helper(num - 1)
        memo[num] = result;
        return memo[num];
    }

   return helper(n);
};
//  var tribonacci = function(n) {
//     let dp = [0,1,1];
//     if (n < 3) return dp[n];

//     // this is the bottom up approach using a dp array to keep track of the current value at each element of the original series.
//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
//     }

//     return dp[dp.length - 1];
// };

console.log(
    tribonacci(4),//4
    tribonacci(7),//4
    tribonacci(25 ),//4
);