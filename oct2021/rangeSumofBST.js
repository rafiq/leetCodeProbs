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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let sum = 0;
var rangeSumBST = function(root, low, high) {
    if (root.val === null) return 0;

    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }
    rangeSumBST(root.left, low , high);
    rangeSumBST(root.rigth, low, high);

    return sum;
};
console.log(
    rangeSumBST([10,5,15,3,7,null,18], low = 7, high = 15)
);