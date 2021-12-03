/**
 * @param {character[][]} matrix
 * [["1","0","1","0","0"],
 * ["1","0","1","1","1"],
 * ["1","1","1","1","1"],
 * ["1","0","0","1","0"]]
 *
 * row 0, col 0 = add/sub one from row to check col top and bottom
 * add/sub one from the col to get both sides
 * @return {number}
 */
 var maximalSquare = function(matrix) {


    // go through each element and check if it is one

    // if it is one then check all the squares around it to see if it larger.
        // if there is a one around it, check those record it to a variable
            // if not, then stop
            if (matrix.length == 0 || matrix[0].length == 0) return 0;
            let height = matrix.length, width = matrix[0].length;
            let memo = new Array(height).fill(0).map(() => new Array(width));
            let max = 0;
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) {
                    if (matrix[row][col] == 1) {
                        let len = getMaxSquareLength(row, col, memo, matrix);
                        max = Math.max(max, len**2);
                    }
                }
            }
            return max;
            // Time Complexity: O(m * n), we visit every cell twice at most (when the matrix itself is one big square)
            // Space Complexity: O(m * n), for memoization table
        };

        function getMaxSquareLength(row, col, memo, matrix) {
            if (row < 0 || row >= memo.length || col < 0 || col >= memo[0].length || matrix[row][col] == 0) return 0;
            if (memo[row][col]) return memo[row][col];
            else {
                memo[row][col] = Math.min(getMaxSquareLength(row, col+1, memo, matrix),
                                          getMaxSquareLength(row+1, col, memo, matrix),
                                          getMaxSquareLength(row+1, col+1, memo, matrix)) + 1;
                return memo[row][col];
            }
        };
console.log(
    maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]),//4
);
