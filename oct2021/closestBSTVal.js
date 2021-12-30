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
 * @param {number} target
 * @return {number}
 */
 var closestValue = function(root, target) {
    // const DIFF = (num1, num2) => {
    //     return Math.abs(num1 - num2);
    // }
    // let closest = -Infinity;

    // const DFS = (root,target,node) => {
    //     if (!root) return;

    //     if (DIFF(root.val,target) < DIFF(closest, target) ) closest = root.val;
    //     if (root.val > target) return DFS(root.left,target,closest);
    //     else return DFS(root.right, target, closest);
    // }

    // DFS(root,target,root.val);
    if (root === null || target === null) {
        return null;
    }
    let minDiff = null, resVal = root.val;
    dfs(root);
    return resVal;
    function dfs(root) {
        if (!root) {
            return;
        }
        let diff = Math.abs(root.val - target);
        if (minDiff === null || diff < minDiff) {
            minDiff = diff;
            resVal = root.val;
        }
        if (root.val > target) {
            dfs(root.left);
        } else {
            dfs(root.right);
        }
    }
};
console.log(
    closestValue()
);

ITERATIVE APPROACH
var closestValue = function(root, target) {
    let closest = root.val;
    while(root) {
        closest = Math.abs(root.val - target) < Math.abs(target - closest) ? root.val : closest;
        if(target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return closest;
};

