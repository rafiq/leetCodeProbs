var calcEquation = function(equations, values, queries) {
    // Graph Adjacency Matrix
    const matrix = {};
    equations.forEach((pair, i) => {
        if (!matrix[pair[0]]) matrix[pair[0]] = {};
        if (!matrix[pair[1]]) matrix[pair[1]] = {};
        matrix[pair[0]][pair[1]] = values[i];
        matrix[pair[1]][pair[0]] = 1 / values[i];
    });
    const keys = Object.keys(matrix);
    keys.forEach(x => {
        keys.forEach(y => {
            if (matrix[x][y]) {
                keys.forEach(xy => {
                    if (matrix[y][xy]) matrix[x][xy] = matrix[y][xy] * matrix[x][y];
                })
            }
        })
    })
    return queries.map(query => matrix[query[0]] && matrix[query[0]][query[1]] ? matrix[query[0]][query[1]] : -1);
};

var calcEquation = function(equations, values, queries) {
    var memory = {};
    equations.forEach((eq, i) => {
        var num1 = eq[0];
        var num2 = eq[1];
        if (!memory[num1]) {
            memory[num1] = { [num2]: values[i] };
        } else {
            memory[num1][num2] = values[i];
        }
        if (!memory[num2]) {
            memory[num2] = { [num1]: 1 / values[i] };
        } else {
            memory[num2][num1] = 1 / values[i];
        }
    });
    return queries.map(function(query) {
        var num1 = query[0];
        var num2 = query[1];

        if (!memory[num1] || !memory[num2]) return -1;

        // BFS
        var visited = {};
        var serachList = [num1];
        var accHistory = [1];

        while(serachList.length > 0) {
            const searchItem = serachList.shift();
            const acc = accHistory.shift();

            if (searchItem === num2) return acc;
            if (visited[searchItem]) continue;
            Object.keys(memory[searchItem]).forEach(function(n) {
                serachList.push(n);
                accHistory.push(acc * memory[searchItem][n]);
            });
            visited[searchItem] = true;
        }
        return -1;
    });

};