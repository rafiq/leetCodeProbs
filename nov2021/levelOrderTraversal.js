/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let result = [];

    const DFS = (root,depth = 0) => {
        if (!root) return;
        result.push(root.val);
        if (root.children && root.children.length > 0) {

            for (let child of root.children) {
                DFS(child,depth += 1)
            }
        }
    }
    DFS(root);
    return result;


    let result = [];

    let queue = [root];

    while (queue.length) {
        let nodes = [];
        for (let node of queue) {
            let current = queue.shift();
            nodes.push(current.val);
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i]);
            }
        }
        result.push(nodes);
    }

    return result;

    const values = [];
    if (!root) return values;
    let lvl = [root];
    while (lvl.length) {
        values.push([...lvl.map((nd) => nd.val)]);
        lvl = lvl.map((nd) => nd.children).flat();
    }
    return values;
};
console.log(
    levelOrder()
);