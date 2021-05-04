/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let sum = 0;

    for (let i = 0; i < mat.length; i++) {
            sum += mat[i][i];
            mat[i][i] = 0;
    }
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][(mat.length - 1) - i];
        mat[i][(mat.length - 1) - i] = 0;
    }

    return sum;
};
console.log(
    diagonalSum([[1,2,3],
        [4,5,6],
        [7,8,9]]),//25
    diagonalSum([[1,1,1,1],
                [1,1,1,1],
                [1,1,1,1],
                [1,1,1,1]])
)