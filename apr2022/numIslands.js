

function countIslands(grid) {
    let count = 0
    const DIRECTIONS = [[-1,0],[1,0],[0,1],[0,-1]]
    let height = grid.length
    let width = grid[0].length

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] === 1) {
                traverse(row,col)
                count++
            }
        }
    }

        return count

        // DFS traversal
        function traverse(row,col) {
            if (row < 0 || row >= height || col < 0 || col >= width || grid[row][col] === 0) return
            grid[row][col] = 0
            for (dir of DIRECTIONS) {
                traverse(row + dir[0], col + dir[1])
            }
        }
    }

function countIslands(grid) {
    let count = 0;
    const DIRECTIONS = [[-1,0],[1,0],[0,1],[0,-1]]
    let height = grid.length
    let width = grid[0].length

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] === 1) {
                grid[row][col] = 0;
                traverse([row,col])
                count++
            }
        }
    }

    function traverse(queue) {
        // add to queue
        while (queue.length) {
            let [row,col] = queue.shift()
            if (row < 0 || row >= height || col < 0 || col >= width || grid[row][col] === 1) continue;
            grid[row][col] = 0
            for (let dir of DIRECTIONS) {
                queue.push([row + dir[0], col + dir[1]])
            }
        }
        // while there is a queue unshift first element turn to "0", and add every neighbor to the  queue

        //
    }
}