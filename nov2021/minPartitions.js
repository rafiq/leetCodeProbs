/**
 * @param {string} n
 * @return {number}
 */
 var minPartitions = function(n) {

    let max = Number.MIN_VALUE
    for (const num of n) {
        max = Math.max(max, parseInt(num))
    }
    return max

};
console.log(
    minPartitions(32)
);