/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (maxOfCol([i,j],matrix) && matrix[i][j] === Math.min(...matrix[i])) return [matrix[i][j]]
        }
    }
    return -1;
};
function maxOfCol(arr,matrix) {
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][arr[1]] > max) max = matrix[i][arr[1]]
    }

    return max === matrix[arr[0]][arr[1]]
}
console.log(
    luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]),//[15]
    luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]),//[12]
    luckyNumbers([[7,8],[1,2]]),//[7]
    luckyNumbers([
        [ 36376, 85652, 21002, 4510 ],
        [ 68246, 64237, 42962, 9974 ],
        [ 32768, 97721, 47338, 5841 ],
        [ 55103, 18179, 79062, 46542 ]
      ]),//[7]
)
// ! This solution above worked on my console but did not work in the leetcode console. It returned runtime error. I am not sure why
// I used the below solution which is nice using reduce
var luckyNumbers  = function(matrix) {
    return matrix.reduce((accu,curr) => {
          let rowMin = Math.min(...curr)
          let rowMinIndex = curr.indexOf(rowMin)
          let colMax = []
          for(let i = 0; i < matrix.length; i+=1) {
              colMax.push(matrix[i][rowMinIndex])
          }
          if(Math.max(...colMax) === rowMin) {
              accu.push(rowMin)
          }
          return accu
      },[])
  }
