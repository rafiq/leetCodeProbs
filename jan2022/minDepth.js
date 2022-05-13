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
 var minDepth = function(root) {
    if (!root) return 0;
    let minDepth = Infinity;

    const DFS = (root,depth) => {
        if (!root) return

        if (!root.left && !root.right) {
            minDepth = Math.min(minDepth,depth)
            return;
        }
        DFS(root.left,depth + 1);
        DFS(root.right, depth + 1);

        return depth = Math.min(depth,root)
    }

    DFS(root,1);
    return minDepth;

    if (!root) return 0;

    let queue = [];
    queue.push(root);
    let depth = 0;

    while (queue.length !== 0) {
        let numberOfNode = queue.length;
        while (numberOfNode > 0) {
            let currentNode = queue.shift();
            if (!currentNode.left && !currentNode.right) {
                depth++;
                return depth;
            }
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);

            numberOfNode--;
        }
        depth++;
    }
};
console.log(

);