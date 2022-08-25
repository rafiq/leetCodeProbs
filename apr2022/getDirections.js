function getDirections(root, startValue, destValue) {
    let graph = new Map()

    queue = [root]

    while (queue.length) {
        node = queue.shift()

        if (node.left) {
            graph[node.left.val] = [node.val,"U"]
            graph[node.val] = [node.left.val,"L"]

            queue.push(node.left)
        }

        if (node.right) {
            graph[node.right.val] = [node.val,"U"]
            graph[node.val] = [node.right.val,"R"]

            queue.push(node.right)
        }
    }

    queue =

}
let start = "";
let end = "";

const traverse = (node, path) => {
    if (node === null) return;

    if (node.val === startValue) start = path;
    if (node.val === destValue) end = path;

    if (start !== "" && end !== "") return;
    if (node.left !== null) traverse(node.left, path + "L");
    if (node.right !== null) traverse(node.right, path + "R");
}

traverse(root, "");

let skip = 0;
while (start[skip] && start[skip] === end[skip]) ++skip;

return "U".repeat(start.length - skip) + end.substring(skip);

// BFS
var getDirections = function(root, startValue, destValue) {
    let newRoot = lca(root, startValue, destValue);
    let start = bfs(newRoot, startValue);
    let dest = bfs(newRoot, destValue);

    return "U".repeat(start.length) + dest;
};

let bfs = function(root, val) {
    let que = [
        [root, '']
    ];
    while(que.length) {
        let [node, path] = que.pop();

        if(node.val == val) {
            return path;
        }

        if(node.left) {
            que.unshift([node.left, path+'L']);
        }
        if(node.right) {
            que.unshift([node.right, path+'R']);
        }
    }
    return '';
};

var getDirections = function(root, startValue, destValue) {
    let newRoot = lca(root, startValue, destValue);
    let startPath = getPath(newRoot, startValue, '');
    let destPath  = getPath(newRoot, destValue, '');

    return "U".repeat(startPath.length) + destPath;
};

var lca = function(node, p, q) {
    if(!node) { return null; }
    if(node.val == p || node.val == q) {
        return node;
    }
    let left = lca(node.left, p, q);
    let right = lca(node.right, p, q);

    if(left && right) {
        return node;
    }
    return left || right;
};


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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
 var getDirections = function(root, startValue, destValue) {

};

/**
 * To find the shortest path we should use BFS keeping track of the levels as we go
 *adjancy list
 * level1:  5:1,2
 * level2:  1:3
 * level3:  2:6,4
 * level4: []
 */

 var getDirections = function(root, startValue, destValue) {
    if (startValue === destValue) return '';

    root.path = '';

    // start searching
    let bfsQueue = [root];
    let startDirections;
    let endDirections;
    while (bfsQueue.length) {
        const current = bfsQueue.pop();

        if (current.val === startValue) {
            startDirections = current.path;
        }

        if (current.val === destValue) {
            endDirections = current.path;
        }

        if (endDirections && startDirections) break; // we've found both nodes

        if (current.left) {
            current.left.path = current.path + 'L';
            bfsQueue.unshift(current.left)
        }

        if (current.right) {
            current.right.path = current.path + 'R';
            bfsQueue.unshift(current.right)
        }
    }

    return comparePathsFromRoot(startDirections, endDirections);
};

function comparePathsFromRoot(startDirections, endDirections) {
    // LLRLRLRLL   // LLLRL ->
    //       delete first two L's
    //       replace remaining directions in start with 'U'
    //       use entire endDirections
    let directions = '';

    let start = 0;

    while (startDirections[start] === endDirections[start]) {
        start++;
    }

    for (let i = start; i < startDirections.length; i++) {
        directions += 'U';
    }

    for (let i = start; i < endDirections.length; i++) {
        const char = endDirections[i];
        directions += char;
    }

    return directions;
}


// RECURSIVE DFS
// O(n)
// O(n)
function findPath(root, path, value) {
    if (root === null) {
        return "";
    } else if (root.val === value) {
        return path;
    }
    return findPath(root.left,path+"L",value)+findPath(root.right,path+"R",value);
}

var getDirections = function(root, startValue, destValue) {
    var pathToStart = findPath(root,"",startValue);
    var pathToDest = findPath(root,"",destValue);
    var idx = 0;
    var min = Math.min(pathToStart.length,pathToDest.length);
    while (idx < min && pathToStart[idx] === pathToDest[idx]) {
        idx++;
    }
    return "U".repeat(pathToStart.length-idx) + pathToDest.substring(idx);
};


