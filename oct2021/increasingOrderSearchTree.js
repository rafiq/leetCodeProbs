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
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

 var increasingBST = function(root) {
    // let newRoot = 0;
    // if (!root) return 0;
    // // left node, node, right node

    // increasingBST(root.left);
    // newRoot.val = root.val;
    // increasingBST(root.right);
    let newHead = new TreeNode();
    let cur = newHead;
    inorder(root);
    return newHead.right;

    function inorder(root) {
        if (!root) return null;
        inorder(root.left);

        root.left = null;
        cur.right = root;
        cur = cur.right;

        inorder(root.right);
    }
};
console.log(
    increasingBST()
);