var minimumTotal = function(triangle) {
    let dp = new Array(triangle.length).fill(0)
    if (!triangle.length || !triangle[0].length)
        return 0
    dp[0] = triangle[0][0]
    for (let i = 1; i < triangle.length; i++) {
        let col = triangle[i].length - 1, fstItem = dp[0], lstItem = dp[col - 1], dp1 = dp.slice()
        for (let j = 1; j < col; j++) {
            dp[j] = Math.min(dp1[j - 1] + triangle[i][j], dp1[j] + triangle[i][j])
        }
        dp[triangle[i].length - 1] = lstItem + triangle[i][col]
        dp[0] = triangle[i][0] + fstItem

    }
    return Math.min(...dp)
};

var minimumTotal = function(triangle) {
    var hash = {};
    return getMin(0, 0);

    function getMin(h, idx) {
      if (h === triangle.length) return 0;
      if (!hash[h + ':' + idx]) {
        hash[h + ':' + idx] = triangle[h][idx] + Math.min(getMin(h + 1, idx), getMin(h + 1, idx + 1))
      }
      return hash[h + ':' + idx];
    }
  };