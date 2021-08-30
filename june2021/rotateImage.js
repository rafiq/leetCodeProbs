/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let temp = 0;
    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix.length; j++) {
            temp = matrix[j][i + matrix.length];
            matrix[j][i + matrix.length] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }

    return matrix.map(arr => arr.reverse().splice(matrix.length,matrix.length))
};
console.log(
    rotate([[1,2,3],[4,5,6],[7,8,9]]),
    rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]),
    rotate([[1]]),
    rotate([[1,2],[3,4]]),
)

// ! This is an interesting answer because they did the exact same thing as me but with loops. They transposed the matrix by flipping the rows with the columns and then they reversed those arrays.
var transpose = function(matrix) {
    const length = matrix[0].length;
    for(let row = 0; row < length; row++)
        for(let col = row; col < length; col++)
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
}

var reverseColumns = function(matrix) {
    const length = matrix[0].length;
    let start = 0;
    let end = length - 1;
    while(start < end) {
        for(let row = 0; row < length; row++)
            [matrix[row][start], matrix[row][end]] = [matrix[row][end], matrix[row][start]];
        start++;
        end--;
    }
}

var rotate = function(matrix) {
    transpose(matrix);
    reverseColumns(matrix);
};