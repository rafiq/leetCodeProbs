/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var generateTrees = function(n) {

    if (n === 0) {
        return [];
    }
    let dp = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(n + 1);
        dp[i][i] = [new TreeNode(i)];
    }
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            let tmp =  [];
            multip([null], j, dp[j + 1][j + i - 1], tmp);
            for (let k = j + 1; k < i + j - 1; k++) {
                multip(dp[j][k - 1], k, dp[k + 1][j + i - 1], tmp);
            }
            multip(dp[j][j + i - 2], j + i - 1, [null], tmp);
            dp[j][j + i - 1] = tmp;
        }
    }
    return dp[1][n];
};

function multip(leftTrees, nodeVal, rightTrees, result) {
    for (let left of leftTrees) {
        for (let right of rightTrees) {
            let newNode = new TreeNode(nodeVal);
            newNode.left = left;
            newNode.right = right;
            result.push(newNode);
        }
    }
}
console.log(
    generateTrees(),//
);