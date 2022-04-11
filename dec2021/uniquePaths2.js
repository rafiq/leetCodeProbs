/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
//
return Math.abs(findPathways(0, 0, obstacleGrid));
};

const findPathways = (row, col, grid) => {
  const targetRow = grid.length - 1;
  const targetCol = grid[0].length - 1;

  if (row > targetRow || col > targetCol || grid[row][col] === 1) return 0;
  if (row === targetRow && col === targetCol) return -1;

  if (grid[row][col] === 0) {
    const pathRight = findPathways(row, col + 1, grid);
    const pathDown = findPathways(row + 1, col, grid);

    grid[row][col] = pathRight + pathDown;
  }

  return grid[row][col];

var arr = Array(cols).fill(0).fill(1, 0, 1);

for (var r = 0; r < obstacleGrid.length; r++) {
    for (var c = 0; c < obstacleGrid[0].length; c++) {
        arr[c] = obstacleGrid[r][c] === 1 ? 0 : (arr[c] + (arr[c - 1] || 0));
    }
}
return arr[cols - 1];
    // create a m x n grid

    // if the grid = 1 stop route

    // recursively go down and to the right of each square with the limits set to the right side and bottom edges and 1.

    var memo = {};
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if (obstacleGrid[m-1][n-1] === 1) return 0;
    if (m === 0 || n === 0) return 1;

    function dfs(m, n) {
        var key = `${m}|${n}`;
        if (key in memo) return memo[key];
        if (m === 0 || n === 0) return 0;
        if (m === 1 && n === 1) return 1;
        if(obstacleGrid[m-1][n-1] === 1) return 0;
        return (memo[key] = dfs(m - 1, n) + dfs(m, n - 1));
    }
    return dfs(m, n);
};
console.log(
    uniquePathsWithObstacles()
);