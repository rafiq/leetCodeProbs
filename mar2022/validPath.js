var validPath = function(n, edges, source, destination) {
    let nodes = [];

    for(let i = 0; i < n; i++) {
        nodes[i] = {
            val:i,
            edges:[]
        };
    }

    for(let j = 0; j < edges.length; j++) {
        let edge = edges[j];
        nodes[edge[0]].edges.push(edge[1]);
        nodes[edge[1]].edges.push(edge[0]);
    }

    let valid = false
    let visited = {};
    let queue = [];
    queue.push(nodes[source]);

    while( queue.length != 0 ) {
        let node = queue.shift();
        visited[node.val] = true;

        if( node.val == destination ) {
            valid = true;
            break;
        }

        node.edges.forEach(edge => {
           if(visited[edge] === undefined) {
               queue.push(nodes[edge]);
           }
        });
    }

    return valid;




// create adjancency list of sets from the input
    let adj = new Array(n).fill().map(_=>new Set());
    for(const [from, to] of edges) {
        adj[from].add(to);
        adj[to].add(from);
    }
// create a que from the initial node
    let que = [start];
    // create a hashtable for reference of visited nodes
    let seen = new Set([start]);

    // iterate over the node and all it's neighbors before going to the next node
    while(que.length) {
        // use queue structure which is  a queue: FILO
        let node = que.pop();
        // check if you reached the destination
        if(node == end) return true;
        // check the neighbors
        for(const nei of adj[node]) {
            if(seen.has(nei)) continue;
            // if not seen, add neighbor to front of the queue and to the visited hashtable
            seen.add(nei);
            que.unshift(nei);
        }
    }
    return seen.size == n;
};
