/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]) &&
    //     Math.abs(i - nums.lastIndexOf(nums[i])) < k || Math.abs(i - nums.lastIndexOf(nums[i])) === k) return true;
    // }
    // return false

    let hash = {};
    for (let i = 0; i < nums.length; i++) {
      if ((hash[nums[i]] !== undefined) && (Math.abs(hash[nums[i]] - i) <= k)) {
        return true;
      } else {
        hash[nums[i]] = i;
      }
    }
    return false;

};
console.log(
    containsNearbyDuplicate([1,2,3,1], 3),//true
    containsNearbyDuplicate([1,0,1,1], 1),//true
    containsNearbyDuplicate([1,2,3,1,2,3], 2),//false
)