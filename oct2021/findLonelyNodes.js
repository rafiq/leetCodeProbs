/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var getLonelyNodes = function(root) {
    let result = [];
    let count = 0;
    if (root === null) return;

    if (root.right === null && root.left !== null) {
        count++;
    }
    if (root.left === null && root.right !== null) {
        count++;
    }

    getLonelyNodes(root.left);
    getLonelyNodes(root.right);

    return [count];
};
console.log(
    getLonelyNodes([1,2,3,null,4]),//[4]
)

let res = [];
dfs(root);
return res;
// Time Complexity: O(N), we visit all nodes
// Space Complexity: O(H), call stack can go as deep as height of tree and this height can be at most N (in case of a skewed tree)

function dfs(root) {
    if (!root) return;
    if (root.left && !root.right) {
        res.push(root.left.val);
    }
    if (!root.left && root.right) {
        res.push(root.right.val);
    }
    dfs(root.left);
    dfs(root.right);
}