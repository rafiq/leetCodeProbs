/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {


    // let end = grid[grid.length - 1];



    // return grid;
    if (grid.length === 0 || grid[0].length === 0) {
        return Infinity;
    }
    let height = grid.length, width = grid[0].length;
    for (let row = height-1; row >= 0; row--) {
        for (let col = width-1; col >= 0; col--) {
            if (row === height-1 && col === width-1) {
                continue;
            }
            let right = col < width-1 ? grid[row][col+1] : Infinity;
            let bottom = row < height-1 ? grid[row+1][col] : Infinity;
            grid[row][col] = grid[row][col] + Math.min(right, bottom);
        }
    }
    return grid[0][0];

    /**
     * const mem = {};

    const canGoRight = (x) => x < grid[0].length - 1;
    const canGoDown = (y) => y < grid.length - 1;

    const t = (grid, x, y) => {
        if (!canGoRight(x) && !canGoDown(y)) {
            return grid[y][x];
        }
        if (mem[`${y}-${x}`]) {
            return mem[`${y}-${x}`];
        };

        let min1 = Number.MAX_SAFE_INTEGER;
        let min2 = Number.MAX_SAFE_INTEGER;

        if (canGoRight(x)) {
            min1 = t(grid, x+1, y);
        }
        if (canGoDown(y)) {
            min2 = t(grid, x, y+1);
        }

        return mem[`${y}-${x}`] = Math.min(grid[y][x]+min1, grid[y][x]+min2);
    };

    return t(grid, 0, 0);
     */
};
console.log(
    minPathSum([[1,3,1],[1,5,1],[4,2,1]])
);