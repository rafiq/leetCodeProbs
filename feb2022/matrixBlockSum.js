/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
 var matrixBlockSum = function(mat, k) {
    let answer = [], m = mat.length, n = mat[0].length;
    for (let i = 0; i < m; i++) {
        answer[i] = [];
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let r = i-k < 0 ? 0 : i-k;
            let rUpper = i+k > m-1 ? m-1 : i+k;
            let c = j-k < 0 ? 0 : j-k;
            let cUpper = j+k > n-1 ? n-1 : j+k;
            while (r <= rUpper) {
                sum += mat[r].slice(c,cUpper+1).reduce((acc,cur) => acc+cur);
                r++;
            }
            answer[i][j] = sum;
        }
    }
    return answer;
};
console.log(
    matrixBlockSum()
);