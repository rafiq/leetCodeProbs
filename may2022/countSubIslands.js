var countSubIslands = function(grid1, grid2) {
    let row = grid1.length;
    let col = grid1[0].length;
    let dirs = [[1,0],[0,1],[-1,0],[0,-1]];
    let isSubIsland;
    let subIslandCount = 0;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            isSubIsland = true;
            if(grid2[i][j]==1){
                dfs(grid2,i,j);
                if(isSubIsland){
                    subIslandCount++;
                }
            }

        }
    }
    return subIslandCount;

    function dfs(g,i,j){
        if(i<0 || j<0 || i>=row || j>=col || g[i][j]==0){
            return;
        }
        if(grid1[i][j]==0){
            isSubIsland = false;
        }
        g[i][j] = 0;

        for(let d=0;d<dirs.length;d++){
            dfs(g,i+dirs[d][0],j+dirs[d][1]);
        }

    }
};