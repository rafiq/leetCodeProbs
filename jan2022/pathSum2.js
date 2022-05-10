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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let result = [];

    const DFS = (node, sum = 0,path = []) => {
        if (!node.left && !node.right && sum + node.val === targetSum) {
            path.push(node.val)
            return result.push(path);
        }
        path.push(node.val)

        DFS(node.left, sum + node.val);
        DFS(node.right, sum + node.val);
    }

    DFS(root,0)
};
console.log(
    pathSum()
);

var pathSum = function(root, sum) {
    let res = [], tmp = []
    if (root == null)
        return []
    helper(root, sum, res, tmp, 0, root)
    return res
};

const helper = function(root, target, res, tmp, sum, node) {
    if (node.left == null && node.right == null) {
        if (sum + node.val == target) {
            let copy = tmp.slice()
            copy.push(node.val)
            res.push(copy)
        }
        return
    }
    tmp.push(node.val)
    sum += node.val
    if (node.left)
        helper(root, target, res, tmp, sum, node.left)
    if (node.right)
        helper(root, target, res, tmp, sum, node.right)
    tmp.pop()
    sum -= node.val
}

const pathSum = function(node, t) {
    const paths = [], path = [];
    const dfs = (root, sum) => {
        if (!root) {
            return;
        }
        const leaf = !root.left && !root.right;
        if (leaf && root.val+sum === t) {
            paths.push([...path, root.val]);
        }

        path.push(root.val);
        dfs(root.left, root.val+sum);
        dfs(root.right, root.val+sum);
        path.pop();
    }
    dfs(node, 0);

    return paths;
};
