/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
    let longest = 0

    for (let i = 0; i < nums.length; i++) {
        let curr = nums.filter(el => el === nums[i] + 1).length > nums.filter(el => el === nums[1] + 1).length ? nums.filter(el => el === nums[1] + 1).length : nums.filter(el => el === nums[1] - 1).length;
        if (curr === 0 || nums.filter(el => el === nums[i]).length === 0) continue
        curr = curr + nums.filter(el => el === nums[i]).length;
        if (curr > longest) longest = curr
    }

    return longest
};
console.log(
    findLHS(    [1,3,2,2,5,2,3,7]
        ),//5
    findLHS([1,2,3,4]),
    findLHS([1,1,1,1])
)