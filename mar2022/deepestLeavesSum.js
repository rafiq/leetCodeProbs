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
 var deepestLeavesSum = function(root) {

    // let sum = 0;
    // let valArray = [];

    // const DFS = node => {
    //     if (node.val === undefined) {
    //         sum += valArray.pop();
    //     }

    //     valArray.push(node.val);

    //     DFS(node.left)
    //     DFS(node.right)
    // }

    // return sum;

    let totalDepth = [0] // the height of the tree since it adds values from every level
    let depthArr = [0] // tracking the current depth
    let queue = [root] // tracks the remaning leaves

    while (queue.length > 0) {
        let node = queue.shift()
        let currDepth = depthArr.shift()

	// if the length is less than the current depth, it means it needs to push a 0 for adding that depth
        if (totalDepth.length-1 < currDepth) {
			totalDepth.push(0)
        }

        // if in the same depth/level, add the values together
        if (totalDepth.length-1 == currDepth) {
            totalDepth[totalDepth.length-1] += node.val
        }

        if (node.left != null) {
            queue.push(node.left)
            depthArr.push(currDepth+1)
        }
        if (node.right != null) {
            queue.push(node.right)
            depthArr.push(currDepth+1)
        }
    }

    // return the last value added which is the deepest in the tree
    return totalDepth[totalDepth.length-1]
};
console.log(
    deepestLeavesSum();
);