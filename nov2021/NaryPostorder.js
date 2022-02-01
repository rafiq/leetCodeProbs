/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    let result = [];

    const DFS = root => {
        if (!root) return;
        let current = [root.children]
        while (current) {

        }
        for (let i = 0; i < this.children.length; i++) {
            if (root.children[i]) DFS(root.children[i]);
        }
        result.push(root.val);
    }
    if (root) DFS(root);
    return result;

};


var postorder = function (root) {
    const values = [];
    const list = [root];
    while (list.length) {
      const nd = list.pop();
      if (nd) {
        values.unshift(nd.val);
        list.push(...nd.children);
      }
    }
    return values;
  };

  var postorder = function (root) {
    function traverse(nd, values = []) {
      if (!nd) return values;
      for (const child of nd.children) {
        traverse(child, values);
      }
      values.push(nd.val);
      return values;
    }
    return traverse(root);
  };