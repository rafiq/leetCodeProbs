/**
 * @param {number[][]} matrix
 * @return {number}
 */
 var countSquares = function(matrix) {
// if matrix size is 0
// if(!matrix.length || !matrix[0].length) {
//     return 0;
// }
// const m = matrix.length,    // rows
//       n = matrix[0].length;    // columns

// let count = 0;
// for(let i = 0; i < m; ++i) {
//     for(let j = 0; j < n; ++j) {
//         // if row and column are greater than 0 and cell value is 1
//         // we check the 3 adjacent cells and find the maximum length square possible
//         if(i && j && matrix[i][j]) {
//             matrix[i][j] += Math.min(matrix[i - 1][j],
//                                      matrix[i][j - 1],
//                                      matrix[i - 1][j - 1]);
//         }
//         // add to count
//         count += matrix[i][j];
//     }
// }
// return count;

if(!matrix.length || !matrix[0].length) {
    return 0;
}
const m = matrix.length,
      n = matrix[0].length;

let count = 0;
for(let i = 0; i < m; ++i) {
    for(let j = 0; j < n; ++j) {
        if(i && j && matrix[i][j]) {
            matrix[i][j] += Math.min(matrix[i - 1][j],
                                     matrix[i][j - 1],
                                     matrix[i - 1][j - 1]);
        }
        count += matrix[i][j];
    }
}
return count;
};
console.log(
    countSquares([
        [0,1,1,1],
        [1,1,1,1],
        [0,1,1,1]
      ])
);