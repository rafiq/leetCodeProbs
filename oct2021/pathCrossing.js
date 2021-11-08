/**
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
    let hash = {};
    let current = [0,0]

    path.split("").forEach(el => {
        if (current in hash) return true;
        hash[current] = true;
        if (el === "N") current[1] += 1;
        if (el === "S") current[1] -= 1;
        if (el === "E") current[0] += 1;
        if (el === "W") current[0] -= 1;

        console.log(el,hash)
    })

    return false;
    // const getPositionKey = (position) => {
    //     return position.join('_')
    // };

    // let position = [0, 0];

    // const visitedPositions = new Set([getPositionKey(position)]);

    // for (let char of path) {
    //     if (char === 'N') {
    //         position[1] += 1;
    //     } else if (char === 'S') {
    //         position[1] -= 1;
    //     } else if (char === 'E') {
    //         position[0] += 1;
    //     } else if (char === 'W') {
    //         position[0] -= 1;
    //     }

    //     const positionKey = getPositionKey(position);

    //     if (visitedPositions.has(positionKey)) {
    //         return true;
    //     } else {
    //         visitedPositions.add(positionKey);
    //     }
    // }

    // return false;
};
console.log(
    // isPathCrossing("NESWW"),//false;
    // isPathCrossing("NES"),//false;
    isPathCrossing("NESWW"),//true;
)