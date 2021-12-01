/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {



        if (!tree1 && !tree2) return null;
        if (!tree1 && tree2) return tree2;
        if (!tree2 && tree1) return tree1;

        tree1.val += tree2.val;
        tree1.left = mergeTrees(tree1.left,tree2.left);
        tree2.right = mergeTrees(tree1.right,tree2.right);
    return tree1;
};

console.log(
    mergeTrees([1,3,2,5], root2 = [2,1,3,null,4,null,7])
);

function mergeTrees(root) {
    return dfs(root1, root2);
// T.C: O(min(M, N))
// S.C: O(min(H1, H2))

    const dfs = (root1, root2) => {
        if (!root1 && !root2) {
            return null;
        }
        if (!root1 || !root2) {
            return root1 || root2;
        }
        root1.val += root2.val;
        root1.left = dfs(root1.left, root2.left);
        root1.right = dfs(root1.right, root2.right);
        return root1;
    }
}