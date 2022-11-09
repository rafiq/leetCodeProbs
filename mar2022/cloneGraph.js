/*
First Solution

1. Use DFS to traverse all nodes and store them to an array.
2. Iterate through the array and for each node record it to a hash table with a new instance of the node.
3. Iterate through the array again and for each node iterate through all its neighbour nodes.
For each neighbour node, access the clone node in hash table and connect current clone node to these neighbour clones.
*/
var cloneGraph = function(node) {
    if (!node) {
        return null;
    }
    let arr = [];
    dfs(node, arr);
    let nodeMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        nodeMap.set(arr[i], new Node(arr[i].val));
    }
    for (let i = 0; i < arr.length; i++) {
        for (let neighbor of arr[i].neighbors) {
            let copiedNode = nodeMap.get(neighbor);
            nodeMap.get(arr[i]).neighbors.push(copiedNode);
        }
    }
    return nodeMap.get(node);
    // T.C: O(V+E), we visit every vertex and every edge
    // S.C: O(V), visited map, nodeMap, dfs call stack all have a space complexity of O(V)
};

function dfs(node, arr, visited=new Map()) {
    if (visited.has(node)) {
        return;
    }
    visited.set(node, true);
    arr.push(node);
    for (let neighbor of node.neighbors) {
        dfs(neighbor, arr, visited);
    }
}
/*
Second Solution

1.Consider every node as a graph.
2. For every node given, check if its clone exists in given hash table.
If so, return it from hash table.
Else, create a clone of given node. Iterate through given node's neighbours and clone each neighbor
and push it to cloned node's neighbors array.
3. Return cloned node.
*/
var cloneGraph = function (node, cloneMap = new Map()) {
  if (!node) {
    return null;
  }
  if (cloneMap.has(node)) {
    return cloneMap.get(node);
  }
  let cloneNode = new Node(node.val, []);
  cloneMap.set(node, cloneNode);
  for (let neighbor of node.neighbors) {
    cloneNode.neighbors.push(cloneGraph(neighbor, cloneMap));
  }
  return cloneNode;
  // T.C: O(V+E), we visit every vertex and every edge
  // S.C: O(V), cloneMap has a space complexity of O(V)
};