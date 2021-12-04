/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestUniqueNumber = function(nums) {
    let result = -1;
    nums = nums.sort((a,b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i]
    }

    return result;
};
console.log(
    largestUniqueNumber([5,7,3,9,4,9,8,3,1]),//8
    largestUniqueNumber([9,9,8,8]),//-1
);