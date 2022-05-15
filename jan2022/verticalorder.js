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
 var verticalOrder = function(root) {
    if (!root) return [];

    let cache = {};
    let result = [];

    const DFS = (node,col) => {
        if (!node) return;

        if (cache[col]) {
            cache[col].push(node.val)
        } else {
            cache[col] = [node.val];
        }

        if (node.left) DFS(node.left,col - 1);
        if (node.right) DFS(node.right, col + 1);
    }

    DFS(root,0);

    // let object = Object.entries(cache);
    // let start = Math.min(object);
    // let end = Math.min(object);
    // for (let i = start; i < end; i++) {
    //     result.push(cache[i]);
    // }
    // return result;
    return Object.keys(cache).sort((a,b) => parseInt(a) - parseInt(b)).map(i => cache[i])

    if(!root) return []

    const result = {}
    const queue = [[root,0]]

    while(queue.length) {
      const [node, column] = queue.shift()

      if(result[column]) result[column].push(node.val)
      else result[column] = [node.val]

      if(node.left) queue.push([node.left, column - 1])
      if(node.right) queue.push([node.right, column + 1])

    }

    return Object.keys(result).sort((a,b) => parseInt(a) - parseInt(b)).map(i => result[i])
};

console.log(
    verticalOrder()
);