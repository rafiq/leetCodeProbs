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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    // fi mistake mark as top
    // let mistakeOne = "";
    // let mistakeTwo = "";

    // const DFS = (root) => {
    //     if (!root) return root;

    //     if (root.val )

    //     if (!mistakeOne) {

    //     } else {


    //         mistakeTwo = root;
    //         return swapNodes(mistakeOne,mistakeTwo);
    //     }

    // }
    // //if second mistake found mark as numberTwo and swap

    // const swapNodes = (n1,n2) => {
    //     let temp = n1
    //     n1 = n2;
    //     n2 = temp;
    //     temp = 0;
    // }
    // return DFS(root)

    var prev, first, second;

    function inorder(root) {
        if (!root) return;

        inorder(root.left);

        if (prev && prev.val > root.val) {
            // Found a mistake
            if (!first) first = prev; // Only set the "first" once
            second = root; // Always update the "second"
        }
        prev = root;

        inorder(root.right);
    }

    inorder(root);

    // Swap the values of the two nodes
    var temp = first.val;
    first.val = second.val;
    second.val = temp;
};
console.log(
    recoverTree()
);