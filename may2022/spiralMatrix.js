var spiralOrder = function(matrix) {
    if (matrix.length == 0) return [];

    let res = [];
    let row1 = 0, col1 = 0, row2 = matrix.length-1, col2 = matrix[0].length-1;

    while (row1 <= row2 && col1 <= col2) {
        // upper perimeter
        for (let col = col1; col <= col2; col++) {
            res.push(matrix[row1][col]);
        }
        // right perimeter
        for (let row = row1+1; row <= row2; row++) {
            res.push(matrix[row][col2]);
        }
        if (row1 < row2 && col1 < col2) {
            // bottom perimeter
            for (let col = col2-1; col >= col1; col--) {
                res.push(matrix[row2][col]);
            }
            // left perimeter
            for (let row = row2-1; row > row1; row--) {
                res.push(matrix[row][col1]);
            }
        }

        row1++, col1++, row2--, col2--;
    }

    return res;

    // Time Complexity: O(m*n)
    // Space Complexity: O(1)
};

var spiralOrder = function(matrix) {
    let result=[];
     if(matrix.length===0)
         {
             return result;
         }

    //left
    let left=0;
    //right
    let right=matrix[0].length-1;
    //top
    let top=0;
    //bottom
    let bottom=matrix.length-1;
    //we would start from right to left
    let direction=0;
    while(left<=right && top<=bottom)
    {
       if(direction===0)
       {
         for(let x=left;x<=right;x++)
         {
             result.push(matrix[top][x]);
         }
         top++;
         direction=1;
       }
       else if(direction===1)
       {
         for(let x=top;x<=bottom;x++)
         {
             result.push(matrix[x][right]);
         }
           direction=2;
           right--;
       }
       else if(direction===2)
       {
         for(let x=right;x>=left;x--)
         {
             result.push(matrix[bottom][x])
         }
         bottom--;
         direction=3;

       }else if(direction=3)
       {
           for(let x=bottom;x>=top;x--)
         {
              result.push(matrix[x][left])
         }
         left++;
         direction=0;
       }

    }


     return result;
 };