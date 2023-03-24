var pacificAtlantic = function(grid) {
    const output = [];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const reachedPacificAndAtlantic = bfs(i, j, grid);
            if (reachedPacificAndAtlantic) {
                output.push([i, j]);
            }
        }
    }

    return output;
};

function bfs(row, col, grid) {
    const queue = [[row, col]];
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const beenThere = new Set();
    const reachedPacificAndAtlantic = [false, false];

    while (queue.length) {
        const [cRow, cCol] = queue.shift();

        if (hasReachedPacific(cRow, cCol, grid)) reachedPacificAndAtlantic[0] = true;
        if (hasReachedAtlantic(cRow, cCol, grid)) reachedPacificAndAtlantic[1] = true;
        if (reachedPacificAndAtlantic[0] && reachedPacificAndAtlantic[1]) return true;

        directions.forEach(direction => {
            // This is just another way to move over every direction from the current square.
            const [rToAdd, cToAdd] = direction;
            const [nextRow, nextCol] = [cRow + rToAdd, cCol + cToAdd];

            if (isValid(nextRow, nextCol, cRow, cCol, grid, beenThere)) {
                beenThere.add(`${nextRow}:${nextCol}`);
                queue.push([nextRow, nextCol]);
            }
        })
    }

    return false;
}
// This is checking if the current coordinate is on the board, has not been visited, and it is on a descent from the peak.
function isValid(row, col, cRow, cCol, grid, beenThere) {
    if (grid[row] === undefined) return false;
    if (grid[row][col] === undefined) return false;
    if (beenThere.has(`${row}:${col}`)) return false;
    if (grid[cRow][cCol] < grid[row][col]) return false;//It should be going down, right? Yes it is but they should have named this nextRow, nextCol
    return true;
}
// this is setting up the boundary on eaither sides to see if the flow has gone to the ocean.
function hasReachedPacific(row, col, grid) {
    if (col === 0 || row === 0) return true;
    return false;
}

function hasReachedAtlantic(row, col, grid) {
    if (row === grid.length - 1 || col === grid[0].length - 1) return true;
    return false;
}

/**
 * *Time: O(N x M)
 * *Space: O(N x M)
 */
// Runtime: 156 ms, faster than 72.76% of JavaScript online submissions for Pacific Atlantic Water Flow.
// Memory Usage: 51.3 MB, less than 63.02% of JavaScript online submissions for Pacific Atlantic Water Flow.
var pacificAtlantic2 = function (heights) {
	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const N = heights.length;
	const M = heights[0].length;
	const output = [];

	const pacific = Array.from({ length: N }, () =>
		Array.from({ length: M }, () => 0)
	);
	const atlantic = Array.from({ length: N }, () =>
		Array.from({ length: M }, () => 0)
	);

	// traverse ocean to inland
	const traverse = (ocean, x, y, prev = -Infinity) => {
		if (x < 0 || x >= heights.length) return;
		if (y < 0 || y >= heights[0].length) return;
		if (heights[x][y] < prev) return; // check if water can flow
		if (ocean[x][y] === 1) return; // already visited

		ocean[x][y] = 1; // mark visited

		directions.forEach(([dx, dy]) => {
			traverse(ocean, x + dx, y + dy, heights[x][y]);
		});
	};

	// handle vertical: left & right
	const handleVertical = () => {
		for (let r = 0; r < heights.length; r++) {
			traverse(pacific, r, 0);
			traverse(atlantic, r, M - 1);
		}
	};

	// handle horizontal: top & bottom
	const handleHorizontal = () => {
		for (let c = 0; c < heights[0].length; c++) {
			traverse(pacific, 0, c);
			traverse(atlantic, N - 1, c);
		}
	};

	// find intersection
	const findIntersection = () => {
		for (let r = 0; r < heights.length; r++) {
			for (let c = 0; c < heights[0].length; c++) {
				const validPacific = pacific[r][c];
				const validAtlantic = atlantic[r][c];

				if (validPacific && validAtlantic) output.push([r, c]);
			}
		}
	};

	handleVertical();
	handleHorizontal();
	findIntersection();

	return output;
};

