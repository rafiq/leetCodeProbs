/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    // seen hash

    // iterate through each row and if you find a 1
        // search all sides and mark those grids as seen.

        // return the count
};
console.log(
    numIslands()
);

var numIslands = function(grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] == '1') {
                count++;
                dfsSink(grid, i,j);
            }
        }
    }

    return count;
};

//if there are connected island sink them as connected island only count as one
const dfsSink = (grid, i,j) => {
   //if out of bound or encounter sea
    if (i==grid.length ||i<0 ||j==grid[0].length||j<0||grid[i][j] =='0') {
        return;
    }
    if (grid[i][j] =='1') {
        grid[i][j] = '0';
        dfsSink(grid, i-1,j);
        dfsSink(grid, i,j-1);
        dfsSink(grid, i+1,j);
        dfsSink(grid, i,j+1);
    }
}