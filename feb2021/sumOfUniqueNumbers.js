/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] = undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]] += 1;
        }
    }

    console.log(hash)
};

sumOfUnique([1,2,3,2]); // 4

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.