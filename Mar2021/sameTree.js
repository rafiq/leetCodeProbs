/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return p.length === q.length && p.every(el => q.includes(el));
};
console.log(
    isSameTree([1,2,3],[1,2,3]),//true
    isSameTree([1,2],[1,null,2]),//false;

)