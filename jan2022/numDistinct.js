/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
 var numDistinct = function(s, t) {
    if (!s || ! t || s.length === 0 || t.length === 0) return 0;

    let dp = new Array(s.length + 1).fill(0).map(() => new Array(t.length + 1).fill(0))

    for (let row = 0; row < dp.length; row++) {
        for (let col = 0; col < dp[0].length; col++) {
            if (row == 0 || col == 0) {
                dp[row][col] = 0
            } else if (s[row - 1] === t[col - 1]) {
                dp[row][col] = dp[row - 1][col - 1] + 1
            } else {
                dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1])
            }

        }
    }

    return dp[s.length][t.length]



};
console.log(
    numDistinct("rabbbit", t = "rabbit")
);

var numDistinct = function(s, t) {
    if (!s && !t) return 1;

    let dp = new Array(t.length + 1)
        .fill(null)
        .map(_ => new Array(s.length + 1).fill(0));

    dp[0] = new Array(s.length + 1).fill(1);

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            dp[i][j] += dp[i][j - 1];
            if (t[i - 1] === s[j - 1]) {
                dp[i][j] += dp[i - 1][j - 1];
            }
        }
    }

    return dp[t.length][s.length];
  };