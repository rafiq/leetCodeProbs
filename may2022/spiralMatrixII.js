const up = {r:-1,c:0};
const down = {r:1,c:0};
const left = {r:0,c:-1};
const right = {r:0,c:1};
const dirs = [right,down,left,up];


var generateMatrix = function(n)
{
        let grid = Array(n+2);
        grid[0] = Array(n+2).fill(1);
        for(let i=1; i<=n; i++)
        {
                grid[i] = Array(n+2);
                grid[i][0] = grid[i][n+1] = 1;
        }
        grid[n+1] = Array(n+2).fill(1);

        let dirIndex = 0, r = 1, c = 0;
        let last = n*n;
        for(let i=1; i<=last; i++)
        {
                r += dirs[dirIndex].r;
                c += dirs[dirIndex].c;
                grid[r][c] = i;
                if(grid[r+dirs[dirIndex].r][c+dirs[dirIndex].c])
                        dirIndex = (dirIndex+1)%4;
        }
        let result = [];
        for(let i=1; i<=n; i++)
                result.push(grid[i].slice(1,n+1));
        return result;
};

var generateMatrix = function(n) {
    const M = [];
    for (let i = 0; i < n; ++i) M[i] = [];
    let r0 = 0, r1 = n - 1, c0 = 0, c1 = n - 1;
    let x = 1;
    while (r0 <= r1 && c0 <= c1) {
        for (let c = c0; c <= c1; ++c) M[r0][c] = x++;
        ++r0;
        for (let r = r0; r <= r1; ++r) M[r][c1] = x++;
        --c1;
        for (let c = c1; c >= c0; --c) M[r1][c] = x++;
        --r1;
        for (let r = r1; r >= r0; --r) M[r][c0] = x++;
        ++c0;
    }
    return M;
};
