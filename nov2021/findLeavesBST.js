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
 * @return {number[][]}
 */
 var findLeaves = function(root) {
    const res = []
    while(root){
      const leafs = []
      root = dfs(root, leafs)
      res.push(leafs)
      if(!root) break
    }
    return res
  };

  function dfs(root, res){
    if(!root) return null
    if(!root.left && !root.right){
      res.push(root.val)
      return null
    }
    root.left = dfs(root.left, res)
    root.right = dfs(root.right, res)
    return root
  }

console.log(
    findLeaves()
);


var findLeaves = function(root) {
    const res = [];

    dfs(root);

    return res;

    function dfs(node) {
        if (node == null) return -1;

        const leftHeight = dfs(node.left);
        const rightHeight = dfs(node.right);

        const currHeight = Math.max(leftHeight, rightHeight) + 1;

        if (!res[currHeight]) res[currHeight] = [];
        res[currHeight].push(node.val);

        return currHeight;
    }
 };