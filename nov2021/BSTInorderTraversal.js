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
 var inorderTraversal = function(root) {
    let result = [];

    const DFS = root => {
        if (root.left) DFS(root.left);
        result.push(root.val);
        if (root.right) DFS(root.right);
    }
    if (root) DFS(root);

    return result;
};
console.log(
    inorderTraversal()
);

const traversed = [];
function inOrderTraverse(node) {
    if (node.left) {
        inOrderTraverse(node.left);
    }
    traversed.push(node.val);
    if (node.right) {
        inOrderTraverse(node.right);
    }
}
if (root)
    inOrderTraverse(root);
return traversed;

var postorderTraversal = function(root) {
    if(!root) return [];
    const arr = [],
          stack = [root];
    while(stack.length) {
        const current = stack.pop();
        arr.unshift(current.val);
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);

    }
    return arr;
};