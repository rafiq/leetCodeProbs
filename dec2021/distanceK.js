/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
// create a node array from the node where all children will be put into a one nested array

let m = new Map(), visited = new Map(), res = [];
// (key, value) in m represents (node, parent)
traverse(root, m, visited);
findNodes(target);
return res;

function findNodes(root, distance=0) {
    if (!root || visited.get(root)) return;
    if (distance == K) {
        res.push(root.val);
        return;
    }
    visited.set(root, true);
    if (m.has(root)) {
        findNodes(m.get(root), distance + 1);
    }
    findNodes(root.left, distance + 1);
    findNodes(root.right, distance + 1);
}
// Time Complexity: O(n)
// Space Complexity: O(n)
};

function traverse(root, map, visited) {
if (!root) return;
visited.set(root, false);
if (root.left) {
    map.set(root.left, root);
    traverse(root.left, map, visited);
}
if (root.right) {
    map.set(root.right, root);
    traverse(root.right, map, visited);
}
};
console.log(
    distanceK()
);