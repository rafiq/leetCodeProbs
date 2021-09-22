/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
    // let longestSequence = 0;
    // let currentLength = 0;
    // let l = 0;
    // let r = 1;

    // // for (let i = 0; i < nums.length; i++) {

    // // }
    // while (l < nums.length) {

    //     while ()
    //     if (nums[l] < nums[r]) {

    //     }

    //     l++
    // }
    // return nums;

    if (nums === null || nums.length === 0) {
        return 0;
    }
    let start = 0, max = 1;
    for (let end = 1; end < nums.length; end++) {
        // ensure that subarray is increasing
        if (nums[end-1] >= nums[end]) {
            start = end;
        }
        max = Math.max(max, end-start+1);
    }
    return max;

};
console.log(
    findLengthOfLCIS([1,3,5,4,7]),//3
)