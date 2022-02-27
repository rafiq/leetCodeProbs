/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * var findLength = function(A, B) {
 // Dynamic programming problem, same as finding longest common substring.
    const matrix = createMatrix(A.length, B.length);
    let ans = 0;

    for(let i = 0; i < A.length; i++){
        for( let j = 0; j < B.length; j++){
            if (A[i] == B[j]) {
                const adder = (i > 0 && j > 0) ?  matrix[i-1][j-1] : 0;
                matrix[i][j] = 1 + adder ;
                ans = Math.max(ans, matrix[i][j]);
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    return ans;
};



function createMatrix(n, m) {
    const matrix = [];

    for(let i = 0; i < n; i++){
        matrix.push(new Array(m))
    }

    return matrix;
}
 */
 var findLength = function(nums1, nums2) {

    // for (let i = 0; i < nums1.length; i++) {
    //     console.log(nums1.slice());
    // }
    // return nums1
    let m = nums1.length;
    let n = nums2.length;
    let dp = [...new Array(m + 1)].map(e => new Array(n + 1).fill(0));

    ret = 0;
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                ret = Math.max(ret, dp[i][j]);
            }
        }
    }

    return ret;
};
console.log(
    findLength([1,2,3,2,1], nums2 = [3,2,1,4,7])
);