/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
 var allPossibleFBT = function(n) {
    map = {};
    return dfs(n);

    function dfs(n) {
        if (n == 1) return [new TreeNode(0)];
        if (map[n]) return map[n];

        let temp = [];
        for (let i = 1; i < n; i += 2) {
            let left = dfs(i);
            let right = dfs(n - i - 1);
            for (let l of left) {
                for (let r of right) {
                    let root = new TreeNode(0);
                    root.left = l;
                    root.right = r;
                    temp.push(root);
                }
            }
        }
        return map[n] = temp;
    }
};
console.log(
    allPossibleFBT()
);