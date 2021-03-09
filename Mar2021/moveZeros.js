/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i,1));
        }
    }
    return nums.flat();
};

console.log(
    moveZeroes([0,1,0,3,12]),//[1,3,12,0,0]
)