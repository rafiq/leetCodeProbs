/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {

    // radix sort
    // let set = new Set(nums)
    // set = [...set]
    nums = nums.sort((a,b) => a - b)

    return nums.at(-k)
    // return set
};
console.log(
    findKthLargest([3,2,1,5,6,4], k = 2),
    findKthLargest([3,2,3,1,2,4,5,5,6], k = 4),
);