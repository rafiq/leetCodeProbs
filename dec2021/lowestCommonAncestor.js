/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    // let result = [];

    // const DFS = (node) => {
    //     if (result.length === 3) return Math.max(result[0])
    //     if (node.val === p ) result.push(node.val);
    //     if (node.val === q) result.push(node.val);


    //     if (node.left === p || node.left === p ) {
    //         result.push(node.left)
    //     } else {
    //         (DFS(node.right));
    //     }

    //     if (node.right === q || node.right === q) {
    //         result.push(node.right)
    //     }
    //     else {
    //         (DFS(node.right));
    //     }

    // }
    // DFS(root)
    // return result[0];
    function dfs(start = root) {
        if (!start || start === p || start === q) return start;
        const [left, right] = [dfs(start.left), dfs(start.right)];
        return left && right ? start : left || right;
      }
      return dfs();

};
console.log(
    lowestCommonAncestor(),
);