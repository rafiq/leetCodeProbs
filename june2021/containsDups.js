/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        if (nums.indexOf(curr) !== nums.lastIndexOf(curr)) return true;
    }

    return false;
};

 console.log(
    containsDuplicate([1,2,3,1]),//true
    containsDuplicate([1,2,3,4]),//false
 )