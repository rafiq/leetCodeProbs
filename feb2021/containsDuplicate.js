/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    return (new Set(nums)).size !== nums.length;

    // if (nums.length < 1) return false;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
};
console.log(containsDuplicate([1,2,3,1]))//true
console.log(containsDuplicate([1,2,3,4]))//false
console.log(containsDuplicate([]))//false
console.log(containsDuplicate(
    [2,14,18,22,22]))//true