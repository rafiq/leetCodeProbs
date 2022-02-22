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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    // if (!root) return true;
    // let leftRoot = [];
    // let rightRoot = [];

    // const DFS = root => {
    //     if (!root) return

    //     if (root.left) leftRoot.push(root.val)
    //     if (root.right) rightRoot.push(root.val)
    //     DFS(root.left);
    //     DFS(root.right);

    //     return
    // }

    // return DFS(root.left) === DFS(root.right)
    function check(p, q) {
        if (!p || !q) return p === q;
        if (p.val !== q.val) return false;
        return check(p.left, q.right) && check(p.right, q.left);
    }
    return check(root.left, root.right);
};
console.log(
    isSymmetric()
);

var isSymmetric = function (root) {
    const stack = [[root.left, root.right]];
    while (stack.length > 0) {
        const [p, q] = stack.pop();
        if (p === q) continue;
        if (!p || !q) return false;
        if (p.val !== q.val) return false;
        stack.push([p.left, q.right], [p.right, q.left]);
    }
    return true;
};