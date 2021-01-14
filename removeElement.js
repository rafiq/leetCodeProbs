/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let filtered = nums.filter(num => num !== val)

    // return filtered.length;
    let pointer1 = 0;

    for(let pointer2 = 0; pointer2 < nums.length; pointer2++) {
        if(nums[pointer2] !== val) {
            nums[pointer1] = nums[pointer2];
            pointer1++;
        }
    }
    return pointer1;
};

console.log(removeElement([3,2,2,3],3));
console.log(removeElement([3,2,2,3],1));
console.log(removeElement([0,1,2,2,3,0,4,2],2));

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.