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
 * @return {number}
 */
 var getMinimumDifference = function(root) {

    const recurse = ( less, more, node ) =>
    ! node
        ? Infinity
        : Math.min(
            node.val - less,
            more - node.val,
            recurse( less, node.val, node.left ),
            recurse( node.val, more, node.right ),
        )
    let min = Infinity;


    // creat var of min = infinity
    const DFS = root => {
        let curr = root.val - DFS(root.left)
        if ()
    }
    // DFS tree and subtract each node to the curr cal and if it is smaller than min, then min is that

    return min
};
console.log(
    getMinimumDifference()
);