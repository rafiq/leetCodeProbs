/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums.includes(target - nums[i]) && nums.indexOf(target - nums[i]) !== i) {
            result.push(i);
            result.push(nums.indexOf(target - nums[i]));
            break;
        }
    }

    return result;
};
console.log(

    twoSum([2,7,11,15],9),//[0,1]
    twoSum([3,2,4],6),//[2,1]
    twoSum([3,3]
        ,6),//[0,1]
)