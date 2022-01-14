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
 var isValidBST = function(root) {

    // left val is less the root.val


    // right val is more than root.val

    // every node has max two nodes
    const BFS = root => {

        let queue = [];

        while (queue) {
            let curr = queue.pop();

            if (curr < )

        }

    }
    let prev = -Infinity;
    const inorder = (root) => {
      if (!root) return true;
      if (!inorder(root.left) || root.val <= prev) return false;
      prev = root.val;
      return inorder(root.right);
    };
    return inorder(root);
};

console.log(
    isValidBST()
);

const isValidBST = (root, lo = -Infinity, hi = Infinity) => {
    if (!root) return true;
    if (root.val <= lo || root.val >= hi) return false;
    return isValidBST(root.left, lo, root.val) && isValidBST(root.right, root.val, hi);
  };