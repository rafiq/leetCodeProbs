// Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let pointer1 = 0;

  for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
    if(nums[pointer1] !== nums[pointer2]) {
      pointer1++;
      nums[pointer1] =nums[pointer2];
    }

  }

  return pointer1 + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.