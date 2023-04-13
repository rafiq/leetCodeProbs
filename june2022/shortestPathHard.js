function shortestPath(grid, k) {
    const r = grid.length - 1,
    c = grid[0].length - 1,
    directions = [[0,1],[0,-1],[1,0],[-1,0]],
    q = [[0, [0,0,k]]], //[steps, [i,j,obs_left]]
    visited = new Set(`${0},${0},${k}`)

//edge case
if(k >= r + c) return r + c

while(q.length){

  const [steps, [x, y, obs_left]] = q.shift()
  if(x == r && y == c) return steps

  for(let i = 0; i < directions.length; i++){

      const xx = x + directions[i][0], yy = y + directions[i][1]

      if(xx >= 0 && xx < r + 1 && yy >= 0 && y < c + 1){
           const new_removal = obs_left - grid[xx][yy],
                 new_state = [xx,yy,new_removal],
                 new_visited = `${xx},${yy},${new_removal}`

          if(new_removal >= 0 && !visited.has(new_visited)){
              visited.add(new_visited)
              q.push([steps + 1, new_state])
          }
      }
  }
}
return -1

    // MY code below is getting the wrong result. Debug later
    let row = grid.length - 1;
    let col = grid[0].length - 1;
    const DIR = [[0,1], [1,0],[-1,0],[0,-1]];
    let state = [0, [0,0,k]];//[steps, [row,col,obj_left]]
    let visited = new Set(`${0},${0},${k}`)
    let queue = state;

    //  edge case
    if (k >= row + col) return row + col;

    while (queue.length) {
        let [steps, [r, c, obj_left]] = queue.shift()

        if (r === row && c === col) return steps;

        for (let i = 0; i < DIR.length; i++) {
            const newRow = r + DIR[i][0], newCol = c + DIR[i][1];

            if (newRow >= 0 && newRow < r + 1 && newCol >= 0 && newCol < c + 1) {
                const newRemoval = obj_left - grid[newRow][newCol],
                        newState = [newRow, newCol, newRemoval],
                        newVisited = `${newRow}${newCol}${newRemoval}`

                if (newRemoval >= 0 && !visited.has(newVisited)) {
                    visited.add(newVisited)
                    queue.push([steps + 1, newState])
                }
            }
        }

    }

    return -1
}