/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let memo = new Array(m).fill(0).map(() => new Array(n));

    function pathsToPoint(row, col) {
        if (row == 0 || col == 0) return 1; // base case
        if (!memo[row][col]) {
            memo[row][col] = pathsToPoint(row-1, col) + pathsToPoint(row, col-1);
        }
        return memo[row][col];
    }
    return pathsToPoint(m-1, n-1);
};
console.log(
    uniquePaths()
);

var uniquePaths = function(m, n) {
    let grid = new Array(m).fill(0).map(() => new Array(n));
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row == 0 || col == 0) grid[row][col] = 1;
            else {
                grid[row][col] = grid[row-1][col] + grid[row][col-1];
            }
        }
    }
    return grid[m-1][n-1];
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n)
}