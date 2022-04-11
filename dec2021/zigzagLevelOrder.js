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
 var zigzagLevelOrder = function(root) {

    /**
     *  if (!root) {
        return [];
    }
    const zigZaggedLevels = [];
    let parentStack = [root];
    let directed = false;
    while (parentStack.length > 0) {
        const children = [];
        for (let parent of parentStack) {
            if (parent.left) {
                children.push(parent.left);
            }
            if (parent.right) {
                children.push(parent.right);
            }
        }
        zigZaggedLevels.push(
            !directed
            ? parentStack.map(node => node.val)
            : parentStack.map(node => node.val).reverse());
        parentStack = children;
        directed = !directed;
    }
    return zigZaggedLevels;
     *
     * set up queue
     *
     * set variable LeftToRight to true
     *
     *
     * if (LeftToRight) set it to false
     * pop()
     *
     * else
     * shift()
     *
     */
     if (!root) {
        return [];
    }
    const zigZaggedLevels = [];
    let parentStack = [root];
    let directed = false;
    while (parentStack.length > 0) {
        const children = [];
        for (let parent of parentStack) {
            if (parent.left) {
                children.push(parent.left);
            }
            if (parent.right) {
                children.push(parent.right);
            }
        }
        zigZaggedLevels.push(
            !directed
            ? parentStack.map(node => node.val)
            : parentStack.map(node => node.val).reverse());
        parentStack = children;
        directed = !directed;
    }
    return zigZaggedLevels;
}
console.log(
    zigzagLevelOrder()
);