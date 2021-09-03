/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // let set = {};

    // let result = nums[0];
    for (let i = 0; i < nums.length; i++) {
       if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i]
    }
    return false;
};
console.log(
    singleNumber([4,1,2,1,2]),//4
    singleNumber([2,1,2]),//1
)