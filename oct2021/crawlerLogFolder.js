/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let levelCount = 0;

    for (let log of logs) {
        if (log === "./") continue;
        if (log !== "../") {
            levelCount++
        } else {
            if (levelCount === 0) {
                levelCount = 0;
                continue
            }
            levelCount--
        }
    }
    return levelCount //> 0 ? levelCount : 0
};
console.log(
    minOperations(["d1/","d2/","../","d21/","./"]),//2
    minOperations(["./","wz4/","../","mj2/","../","../","ik0/","il7/"]),//2
    minOperations(["d1/","d2/","./","d3/","../","d31/"]),//3
    minOperations(["d1/","../","../","../"]),//0
)