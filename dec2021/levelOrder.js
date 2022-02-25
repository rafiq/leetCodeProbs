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
 var levelOrder = function(root) {
    // let result = []
    // if (!root) return [];
    // let queue = [];
    // while (queue.length) {
    //         let level = []
    //         let len = queue.length
    //     for (let i = 0; i < len; i++) {
    //         let temp = queue.shift()
    //         if (temp.left) queue.push(temp.left)
    //         if (temp.right) queue.push(temp.right)

    //         level.push(temp.val)
    //     }
    //         result.push(level)
    //     }

    // return result;
    if (root == null) return [];
    let queue = [], values = [];
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(level);
    }
    return values;
};
console.log(
    levelOrder()
);