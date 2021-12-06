/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var largestSubarray = function(nums, k) {
    // let result = [];
    if (k === nums.length) return nums;
    let index = 0;

    for (let i = 0; i < nums.length - k; i++) {
        // let subArray = [];
        // for (let j = i; j < i + k ; j++) {
        //     subArray.push(nums[j])
        // }
        // result.push(subArray)
        if (nums[i] > nums[index]) {
            index = i;
        }
    }
    return nums.slice(index,k+index);
    // return result.sort((a,b) => b[0] - a[0])[0];
};
console.log(
    largestSubarray([1,4,5,2,3], k = 3),//[5,3,2]
    largestSubarray([1,4,5,2,3], k = 4),//[4,5,2,3]
    largestSubarray([1,4,5,2,3], k = 1),//[4,5,2,3]
    );