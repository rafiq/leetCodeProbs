/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    // let result = [];
    // let copyMatrix = matrix.slice();

    // for (let i = 0; i < matrix[0].length; i++) {
    //     for (let j = 0; j < matrix.length; j++) {
    //         result.push(matrix[j][i])
    //     }
    // }
    // return result;

    // return matrix[0].map((val, ind) => matrix.map(row => row[ind]));

    let transposedMat=[];

    for(let i=0;i<matrix[0].length;i++){
        const temp=[]
        for(let j=0;j<matrix.length;j++){
            temp.push(matrix[j][i])
        }
        transposedMat.push(temp);
    }
    return transposedMat;
};

console.log(
    transpose([[1,2,3],[4,5,6],[7,8,9]]),//[[1,4,7],[2,5,8],[3,6,9]])
)