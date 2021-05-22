/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(m) {
    // let rowLength = matrix[0].length;
    // let colHeight = matrix.length;

    // for (let i = 0; i < matrix.length; i++) {
    //     let baseCase = matrix[i][i];

    //     if (matrix[i][i] !== baseCase) return false;
    // }
    // return true;
    // ! ;lakjsd;flasjd;flkasjdf;laksdj
    if (!m.length || !m[0].length) { return true; }

    let rows = m.length, cols = m[0].length;

    for (let col = 0; col < cols; col++) {
        let val = m[0][col];
        for (let row = 1; row < rows && col + row < cols; row++) {
            if (m[row][col + row] !== val) {
                return false;
            }
        }
    }

    for (let row = 1; row < rows; row++) {
        let val = m[row][0];
        for (let col = 1; col < cols && row + col < rows; col++) {
            if (m[row + col][col] !== val) {
                return false;
            }
        }
    }

    return true;
};
console.log(
    isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]),//true
    isToeplitzMatrix([[1,2],[2,2]]),//false;
)