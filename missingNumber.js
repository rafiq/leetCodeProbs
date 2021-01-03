// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

var missingNumber = function(nums) {
  let sumIfNotMissing = nums.length;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sumIfNotMissing += i;
    actualSum += nums[i];
  }
  
  return sumIfNotMissing - actualSum;
}

//   const set = new Set();

//   for(const num of nums) {
//     if (num.indexOf() === -1) {
//       return num;
//     }
//   }
// };

// console.log(missingNumber([3,0,1]))