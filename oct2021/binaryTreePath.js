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
 * @return {string[]}
 */
 var binaryTreePaths = function(root,path) {
    // let path = [];
    // if (root) {
    //     path += String(root.val);

    //     if (!root.left && !root.right) {
    //         paths.push(path)
    //     } else {
    //         path += "->";
    //     }
    // }
    // let paths = [];
    // binaryTreePaths(root,"");
    // return paths;

    let paths = [];

function dfsTraversal(root, cur) {
    if (!root) return;
    if (!root.left && !root.right) {
        paths.push(cur + root.val);
        return;
    }
    dfsTraversal(root.left, cur + root.val + "->");
    dfsTraversal(root.right, cur + root.val + "->");
}

dfsTraversal(root, "");
return paths;
};

