const maxDistance = grid => {
	// find all land -- we will start from land and find max distance
	const findLand = () => {
		const output = [];

		for (let r = 0; r < grid.length; r++) {
			for (let c = 0; c < grid[0].length; c++) {
				const cv = grid[r][c];

				if (cv === 1) output.push([r, c, 1]);
			}
		}

		return output;
	};

	const directions = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const queue = findLand();
	let max = -1; // case when all elements are 0, we set to -1

	while (queue.length) {
		const len = queue.length;

		for (let i = 0; i < len; i++) {
			const [row, col, distance] = queue.shift();

			// traverse all directions
			for (const [dx, dy] of directions) {
				const x = row + dx;
				const y = col + dy;

				// handle invalid
				if (x < 0 || x >= grid.length) continue;
				if (y < 0 || y >= grid[0].length) continue;
				if (grid[x][y] !== 0) continue;

				// increase distance by 1
				queue.push([x, y, distance + 1]);
				max = Math.max(max, distance);
				grid[x][y] = 2; // mark visited
			}
		}
	}

	return max;
};
// The below is the same as above, but I think it is a little more understandable.

var maxDistance = function(grid) {
    const height = grid.length;
    const width = grid[0].length;

    const marked = new Array(height).fill().map(() => new Array(width).fill(0));

    const stack = [];
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(grid[i][j] === 1){
                stack.push([i,j]);
            }
        }
    }

    const vectors = [[-1,0], [1,0], [0,1], [0,-1]];
    let depth = 0;
    let currentCount = stack.length;
    let nextCount = 0;

    while(stack.length>0){
        depth++;

        for(let i=0; i<currentCount;i++){
            const cell = stack.shift();

            for(let j=0; j<vectors.length; j++){
                const nextRow = cell[0]+vectors[j][0];
                const nextColumn = cell[1]+vectors[j][1];

                if(nextRow<0 || nextRow>=height || nextColumn<0 || nextColumn>=width){
                    continue;
                }

                if(marked[nextRow][nextColumn] || grid[nextRow][nextColumn]){
                    continue;
                }

                stack.push([nextRow, nextColumn]);
                marked[nextRow][nextColumn] = depth;
                nextCount++;
            }
        }
        currentCount= nextCount;
        nextCount = 0;
    }

    let max = 0;

    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(marked[i][j] > max){
                max = marked[i][j];
            }
        }
    }

    return max === 0 ? -1 : max;
};