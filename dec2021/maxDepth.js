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
 var maxDepth = function(root) {
    let max = -Infinity;
    let count = 0;

    const DFS = (node,ct) => {
        if (!node) {
            max = Math.max(max,ct);
            return;
        }

        DFS(node.left,ct += 1);
        DFS(node.right, ct += 1);
    }

    DFS(root,count)
    return max;
    /**
     * let maxDepth = 0;
    function dfs(root, depth) {
        if (!root) {
            maxDepth = Math.max(depth, maxDepth);
            return;
        }
        dfs(root.left, depth+1);
        dfs(root.right, depth+1);
    }
    dfs(root, 0);
    return maxDepth;
     */
};
console.log(
    maxDepth()
);

/**
 * var maxDepth = function(root) {
    if (!root) return 0;
    let maxDepth = 0, queue = [{node: root, level:1}];
    while(queue.length) {
        let {node, level} = queue.shift();
        maxDepth = Math.max(maxDepth, level);
        if (node.left) queue.push({node: node.left, level: level+1});
        if (node.right) queue.push({node: node.right, level: level+1});
    }
    return maxDepth;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};
 */