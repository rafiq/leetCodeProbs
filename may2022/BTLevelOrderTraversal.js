var levelOrder = function(root) {
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
    // Time Complexity: O(n)
    // Space Complexity: O(n)
};

var levelOrder = function(root) {
    if (!root) {
        return [];
    } else {
        const traversed = [[root.val]];
        let parents = [root];
        let children = [];
        while (parents.length > 0) {
            for (let root of parents) {
                if (root.left)
                    children.push(root.left);
                if (root.right)
                    children.push(root.right);
            }
            if (children.length > 0) {
                traversed.push(children.map(child => child.val));
            }
            parents = [ ...children ];
            children = [];
        }
        return traversed;
    }
};

var levelOrder = function(root) {
    if (!root) return [];

    const traversed = [[root.val]];
    let parents = [root];
    let children = [];
    while (parents.length > 0) {
        for (let root of parents) {
            if (root.left)
                children.push(root.left);
            if (root.right)
                children.push(root.right);
        }
        if (children.length > 0) {
            traversed.push(children.map(child => child.val));
        }
        parents = [ ...children ];
        children = [];
    }
    return traversed;

};
