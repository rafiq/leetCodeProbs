/*
Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/
var rotate = function (matrix) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) {
      return;
    }
    // we don't count the single entry in the center as a layer
    let numOfLayers = Math.floor(matrix.length / 2);
    for (let i = 0; i < numOfLayers; i++) {
      rotateLayer(matrix, i, matrix.length - 1 - i);
    }
    // T.C: O(N^2)
    // S.C: O(1)
  };

  const rotateLayer = (matrix, start, end) => {
    for (let i = 0; start + i < end; i++) {
      let tempTop = matrix[start][start + i]; // save top
      matrix[start][start + i] = matrix[end - i][start]; // left to top
      matrix[end - i][start] = matrix[end][end - i]; // bottom to left
      matrix[end][end - i] = matrix[start + i][end]; // right to bottom
      matrix[start + i][end] = tempTop;
    }
  };
  // Idea:
  // 1. Transpose the matrix.
  // 2. Reverse each row.
  var rotate = function(matrix) {
      if (matrix.length == 0 || matrix[0].length == 0) return;
      let n = matrix.length;

      for (let row = 0; row < n; row++) {
          for (let col = row; col < n; col++) { // col starts at row because we just modified the top and left boundaries so we don't want to further modify it
              if (row == col) continue; // optimisation
              [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]];
          }
      }
      for (let row = 0; row < n; row++) {
          matrix[row].reverse();
      }
      // Time Complexity: O(n^2)
      // Space Complexity: O(1)
  };