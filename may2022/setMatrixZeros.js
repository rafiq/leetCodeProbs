var setZeroes = function(matrix) {
    let height = matrix.length, width = matrix[0].length;
    let rows = new Set(), cols = new Set();
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (matrix[row][col] == 0) {
                rows.add(row);
                cols.add(col);
            }
        }
    }

    for (let row of rows) {
        for (let col of cols) {
            traverse(row, col);
        }
    }

    function traverse(r, c) {
        for (let i = 0; i < width; i++) {
            matrix[r][i] = 0;
        }
        for (let i = 0; i < height; i++) {
            matrix[i][c] = 0;
        }
    }

    return matrix;
    // Time Complexity: O(m * n)
    // Space Complexity: O(m + n), rows will contain at most m elements and cols will contain at most n elements
};

var setZeroes = function(matrix) {
    // we use the first cell of row and the first cell of column as a flag
    // if matrix[i][j] is 0, we mark matrix[0][j] zero and matrix[i][0] zero
    // this flag means that the particular row and the particular column
    // must be marked zero
    if (matrix.length == 0) return;
    let height = matrix.length, width = matrix[0].length;
    let isRow = checkFirstRow(matrix); // check if first row has zero
    let isCol = checkFirstCol(matrix); //  check if first col has zero
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (matrix[row][col] == 0) {
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }
    // we'll take care of the first row and column later
    for (let row = 1; row < height; row++) {
        for (let col = 1; col < width; col++) {
            if (matrix[row][0] == 0 || matrix[0][col] == 0) {
                matrix[row][col] = 0;
            }
        }
    }
    if (isRow) {
        for (let col = 0; col < width; col++) {
            matrix[0][col] = 0;
        }
    }
    if (isCol) {
        for (let row = 0; row < height; row++) {
            matrix[row][0] = 0;
        }
    }
    // Time Complexity: O(m*n)
    // Space Complexity: O(1)
};

function checkFirstRow(matrix) {
    for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[0][col] === 0) return true;
    }
    return false;
}

function checkFirstCol(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][0] === 0) return true;
    }
    return false;
}