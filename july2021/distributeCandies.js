/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
    let typeCount = new Set(candyType).size
    let totalCandies = candyType.length / 2

    return typeCount < totalCandies ? typeCount : totalCandies
};
console.log(
    distributeCandies([1,1,2,2,3,3]),//3
    distributeCandies([6,6,6,6]),//1
    distributeCandies([1,1,2,3]),//2
)