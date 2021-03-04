// The fastest answer. I like this answer because it is understable. It is just making the first couple rows, and then adding to it by constructing the previous row and adding the top two numbers and then sandwhiching that with the 1 on both ends. It also increments the row up to the number of rows desired. Very smooth.
var generate = function(numRows) {
    if (!numRows) return [];
    if (numRows === 1) return [ [1] ];
    const pascalTriangle = [ [1], [1,1] ];
    if (numRows === 2) return pascalTriangle;

    let row = 2;
    while (row < numRows) {
        pascalTriangle.push([1]);
        const previousRow = pascalTriangle[row - 1];
        for (let i = 0; i < previousRow.length - 1; i++) {
            pascalTriangle[row].push(previousRow[i] + previousRow[i+1]);
        }
        pascalTriangle[row].push(1);
        row++;
    }

    return pascalTriangle;
};

// I was tyring to get this one, and I was close in that I knew I had to have the prev row referenced and I need to start the new/ current row with 1. I
function pascalRecursive(n, a) {
    if (n < 2) return a;

    var prevRow = a[a.length-1];
    var curRow = [1];

    for (var i = 1; i < prevRow.length; i++) {
      curRow[i] = prevRow[i] + prevRow[i-1];
    }
    curRow.push(1);
    a.push(curRow);

    return pascalRecursive(n-1, a); // Call the function recursively
  }

  var generate = function(numRows) {
    var triangle = [];

//First base case
    if(numRows == 0) {
        return triangle
    }

    for (var i = 0; i < numRows; i++) {

        triangle[i] = [];
//Second base case
        triangle[i][0] = 1;

        for (var j = 1; j < i; j++) {
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]
        }
//The last element of all rows are always 1.
        triangle[i][i] = 1;
    }

    return triangle;
}

// The below one is very cryptic and I don't understand it.
var generate = function(numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        result[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i ) {
                result[i][j] = 1
            } else {
                result[i][j] =result[i-1][j-1] + result[i-1][j]
            }
        }
    }

    return result;
};