/**
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
    let negativeCount = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) negativeCount++;
        }
    }

    return negativeCount
};
// This is weird above is the fastest answer which uses a for loop within another for loop, and I thought the for loop was the brute force way of doing things. I though i the last problem map was used as the fastest answer. Very strange indeed.
var countNegatives = function(grid) {
    let count = 0;
    grid.map(subArray => {
        return subArray.map(num => {
            if(num < 0) {
                count++;
            }
        })
    })
    return count;
};

console.log(countNegatives([[1,-1],[-1,-1]]));
console.log(countNegatives([[3,2],[1,0]]));

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.