/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arrayOfSquares = nums.map(num => num * num);


    return arrayOfSquares.sort((a,b) => a - b);
};
console.log(
    sortedSquares([-4,-1,0,3,10]),//[0,1,9,16,100]
    sortedSquares([-7,-3,2,3,11]),//[4,9,9,49,121]
    // sortedSquares([-4,-1,0,3,10]),//
)
