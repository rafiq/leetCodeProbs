// Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let newArray = [];
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > nums[right]) {
      newArray.unshift(nums[left] * nums[left]);
      left++;
    } else {
      newArray.unshift(nums[right] * nums[right]);
      right--;
    }

  }
  return newArray;
};

console.log(sortedSquares([-7,-3,2,3,11]));
console.log(sortedSquares([-4,-1,0,3,10]));

// var sortedSquares = function(nums) {
  // let newArray = [];
  // for (let i = 0; i < nums.length; i++) {
  //   newArray.push(nums[i] * nums[i]);
  // }
  // return newArray.sort(function(a,b) {
  //   return a - b;
  // });
// };

// console.log(sortedSquares([-7,-3,2,3,11]));
// console.log(sortedSquares([-4,-1,0,3,10]));

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

