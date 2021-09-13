"use strict"
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    nums = nums.sort((a,b) => a - b)

    return productDiff(nums[0], nums[1], nums[nums.length - 1], nums[nums.length -2])
};
function productDiff(num1,num2,num3,num4) {

    return  (num3 * num4) - (num1 * num2)
}
console.log(
    // maxProductDifference([5,6,2,7,4]),// 34
    // maxProductDifference([4,2,5,9,7,4,8]),// 64
    maxProductDifference(
        [1,6,7,5,2,4,10,6,4]),// 68
)

var maxProductDifference = function(nums) {
    let first = 0
    let second = 0
    let third = Infinity
    let forth = Infinity

    for(let i = 0; i < nums.length; i++) {
        const value = nums[i]

        if(value >= first || value >= second) {
            second = first > second ? first : second
            first = value
        }

        if(value <= third || value <= forth) {
            forth = third < forth ? third : forth
            third = value
        }
    }

    return (first * second) - (third * forth);
};