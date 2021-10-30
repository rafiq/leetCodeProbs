/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {

    return parseInt(n,10).toString(k).split("").reduce((acc,curr) => {
        acc += +curr
        return acc
    },0)
};
console.log(
    sumBase(34, 6),//9
);