/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let clonedArray = heights.slice();
    let sortedArray = clonedArray.sort((a,b) => a - b)

    let counter = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedArray[i]) {
            counter++;
        }
    }
    return counter;
};

console.log(
    heightChecker([1,1,4,2,1,3]),//3
    heightChecker([5,1,2,3,4]),//5
    heightChecker([1,2,3,4,5]),//0
    // heightChecker(),//
    // heightChecker(),//
)