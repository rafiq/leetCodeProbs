var minFallingPathSum = function(A) {
    let height = A.length, width = A[0].length;

    for (let row = height-2; row >= 0; row--) {
        for (let col = 0; col < width; col++) {
            if (col == 0) {
                A[row][col] += Math.min(A[row+1][col], A[row+1][col+1]);
            }
            else if (col == width-1) {
                A[row][col] += Math.min(A[row+1][col], A[row+1][col-1]);
            }
            else {
                A[row][col] += Math.min(A[row+1][col], A[row+1][col-1], A[row+1][col+1])
            }

        }
    }
    return Math.min(...A[0]);
    // Time Complexity: O(n^2)
    // Space Complexity: O(1)
};

