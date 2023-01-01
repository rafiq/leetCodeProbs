var countComponents = function(n, edges) {
    let adjList = new Array(n).fill().map(() => []);
    let count = 0;
    for(let [x,y] of edges){
        adjList[x].push(y);
        adjList[y].push(x);
    }

    let seen = new Array(n).fill(false);

    for(let i = 0; i < seen.length; i++){
        if(seen[i]) continue;
        count++;
        dfs(adjList, seen, i);
    }
    return count;
};


var dfs = function(adjList, seen, curr){
    if(seen[curr]) return;

    seen[curr] = true;

    for(let next of adjList[curr]){
        dfs(adjList, seen, next);
    }
}

class UnionFind {
    constructor(size) {
        this.root = Array.from({length: size}, (_, i) => i)
        this.rank = Array.from({length: size}, () => 1)
        this.count = size
    }

    find(x) {
        if (x === this.root[x]) return x
        return this.root[x] = this.find(this.root[x])
    }

    union(x, y) {
        let rootX = this.find(x)
        let rootY = this.find(y)

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY
            } else {
                this.root[rootY] = rootX
                this.rank[rootX] += 1
            }
            this.count--
        }
    }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let uf = new UnionFind(n)

    for (let edge of edges) {
        let [x,y] = edge
        uf.union(x, y)
    }
    return uf.count
};