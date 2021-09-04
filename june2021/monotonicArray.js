/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    let increasing = true, decreasing = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i+1]) decreasing = false;
        else if (nums[i] > nums[i+1]) increasing = false;
        else if (nums[i] === nums[i+1]) continue;
    }
    return increasing || decreasing;
    // let increasing = true, decreasing = true;

    // nums[0] <= nums[1] ? increasing = true : increasing = false;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] < nums[i + 1]) return false;
    // }

    // return true;
};
console.log(
    isMonotonic([1,2,2,3]),//true;
    isMonotonic([1,1,1]),//true;
    isMonotonic([6,5,4,4]),//true;
    isMonotonic([1,3,2]),//false;
)

var isMonotonic = function(nums) {
    if (nums.length <= 2) {
        return true;
    }

    let firstDiff = nums[1] - nums[0];

    for (let i = 2; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];
        if (firstDiff * diff < 0) {
            return false;
        }
        if (firstDiff === 0) {
            firstDiff = diff;
        }
    }
    return true;
};