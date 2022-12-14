var shortestDistance = function(m, s, d) {
    const dir = [[1,0], [-1,0], [0,1], [0,-1]]
    const map = new Map()
    const q = [[s[0], s[1], 0]] //position 0
    const res = []
    while(q.length){
      const [row, col, posIdx] = q.shift()
      for(let [x,y] of dir){
        let [r,c,pos] = [row, col, posIdx] // initial copy, lets no modify the original values
        while(r>=0 && r<m.length && c>=0 && c<m[r].length && m[r][c]!==1){
          r+=y
          c+=x
          pos++
        }
        // go back one
        r-=y
        c-=x
        pos--

        if(m[r][c] === 1) continue
        if(map.has(`r${r}+c${c}`) && map.get(`r${r}+c${c}`) <= pos ) continue
        map.set(`r${r}+c${c}`, pos)
        if(r === d[0] && c === d[1]){
          res.push(pos)
          break
        }
        q.push([r,c,pos])
      }
    }
    if(res.length) return Math.min(...res)
    return -1
  };

  var shortestDistance = function(maze, start, destination) {

    let disMin = Number.MAX_VALUE;
    const visited = new Map();
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

	// Wall
    const isOutside = (i, j) => {
        return i < 0 || j < 0 || i >= maze.length || j >= maze[0].length;
    };

	// Roll iteratively based on direction and checks ahead if it should stop
    const roll = (i, j, dir) => {

        while(!isOutside(i + dir[0], j + dir[1]) && maze[i + dir[0]][j + dir[1]] !== 1) {
            i += dir[0];
            j += dir[1];
        }
        return [i, j];
    };

	// BFS
    const helper = (i, j) => {

        const queue = [[i, j, 0]];

        while(queue.length) {

            const {length} = queue;

            for(let i = 0; i < length; i++) {

                const [x, y, dis] = queue.pop();
                const key = `${x}|${y}`;

                if(x === destination[0] && y === destination[1]) disMin = Math.min(disMin, dis);
                if((visited.has(key) && dis >= visited.get(key))) continue; // key condition

                visited.set(key, dis);

                // break into four directions
                /*const up = roll(x, y, [-1, 0]);
                const down = roll(x, y, [1, 0]);
                const left = roll(x, y, [0, -1]);
                const right = roll(x, y, [0, 1]);

                if(up) queue.unshift([...up, dis + Math.abs(up[0] - x)]);
                if(down) queue.unshift([...down, dis + Math.abs(down[0] - x)]);
                if(left) queue.unshift([...left, dis + Math.abs(left[1] - y)]);
                if(right) queue.unshift([...right, dis + Math.abs(right[1] - y)]);*/

                // or one-liner
                dirs.map(dir => roll(x, y, dir)).forEach(([a, b]) => queue.unshift([a, b, dis + Math.abs(x - a) + Math.abs(y - b)]));
            }
        }
        return disMin !== Number.MAX_VALUE ? disMin : -1;
    };

    return helper(start[0], start[1]);

};


