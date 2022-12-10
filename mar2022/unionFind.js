

/**
 * Union Find
 *
 *
 * Find Operation:
 * 1. get root of the node by following the parent node until self loop is reached (ie a node whose parent is itself)
 * 2.
 *
 *
 * Union Operation:
 * 1. Find root node of each component
 * 2. if root nodes are different, then make one of the root nodes be the parent of the other node.
 */

 var validTree = function(n, edges) {
    if (n - 1 !== edges.length) return false
    let uf = new UnionFind(n - 1)

    for (let edge of edges) {
        let [x, y] = edge

        if (!uf.union(x, y)) return false
    }
    return true
};

class UnionFind {
    constructor(size) {
        this.root = Array.from({length: size}, (_, i) => i)
        this.rank = Array.from({length: size}, () => 1)
    }

    find(x) {
        if (this.root[x] === x) return x
        return this.root[x] = this.find(this.root[x])
    }

    union(x, y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        if (rootX === rootY) return false
        if (this.rank[rootX] > this.rank[rootY]) {
            this.root[rootY] = rootX
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.root[rootX] = rootY
        } else {
            this.root[rootY] = rootX
            this.rank[rootX] += 1
        }
        return true
    }
}

// DFS SEARCH
var validTree = function(n, edges) {
    if (edges.length !== n-1) return false;

    let adjList = new Array(n).fill().map(() => []);

    for(let [x,y] of edges){
        adjList[x].push(y);
        adjList[y].push(x);
    }

    let visited = new Array(n).fill(false);
    dfs(adjList, visited, 0)

    for(let i of visited){
        if(i === false){
            return false;
        }
    }
    return true;
};



var dfs = function(adjList, visited, curr){
    if(visited[curr]) return;

    visited[curr] = true;

    for(let conn of adjList[curr]){
        dfs(adjList, visited, conn);
	}
}

