/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let copy = nums.slice()

    for (let i = 0; i < nums.length; i++) {
        copy[i] = nums[nums[i]]
    }

    return copy
};
console.log(
    buildArray([0,2,1,5,3,4]),//
    buildArray([5,0,1,2,3,4]),//
)