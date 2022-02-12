/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 var allPathsSourceTarget = function(graph) {
    let count = 0;


    const DFS = node => {
        if (!node) return;

        for (let child of node) {
            DFS(child);
            count++
        }
    }

    DFS(graph);
    return count;
};
console.log(
    allPathsSourceTarget([[1,2],[3],[3],[]])
);

let result;
var allPathsSourceTarget = function (graph) {
    if (!graph) return null;
    result = Array()
    dfs(graph)
    return result;
};
const dfs = (graph, i = 0, visited = [], path = []) => {
    path.push(i);
    visited[i] = true;
    if(i === graph.length - 1) {
        result.push([...path]);
    }
    for (let j = 0; j < graph[i].length; j++) {
        if(visited[graph[i][j]])
            continue;
       dfs(graph, graph[i][j],visited, path);
    }
    path.pop()
    visited[i] = false;
}
