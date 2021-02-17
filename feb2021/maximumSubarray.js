/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxCurrent = nums[0];
    let globalCurrent = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max (maxCurrent + nums[i], nums[i])
        if (maxCurrent > globalCurrent) {
            globalCurrent = maxCurrent;
        }
    }
    return globalCurrent;
};
console.log(
    maxSubArray([-2,1,-3,4,-1,2,1,-5,4]),//6
    maxSubArray([1]),//1
    maxSubArray([0]),//0
    maxSubArray([-1]),//-1
    maxSubArray([-2,1,-3,4,-1,2,1,-5,4]),//6

)
// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.