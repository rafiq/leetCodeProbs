/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
    let matrix = new Array(m).fill(new Array(n).fill(0));
    for (let i = 0; i < indices.length; i++) {
    //    for (let j = 0; j < indices.length; j++) {
            matrix[i] = matrix[indices[i][0]].map(el => el + 1)
            matrix.map(el => el[indices[i][1]] += 1) //matrix[i][indices[i][1]] += 1// matrix[indices[i][1]].map(el => el + 1)
    //    }
    }
    return matrix
    // return matrix.reduce((acc,curr) => {
    //     acc += curr.filter(el => el % 2 === 1).length;
    //     return acc;
    // },0)
};
console.log(
    oddCells(2,  3,  [[0,1],[1,1]]),//6
    oddCells(2,  2,  [[1,1],[0,0]]),//0
)