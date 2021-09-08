/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let p1 = 0
    let p2 = 0
    let count = 0
        while (p1 < nums.length) {

            while (nums[p1] === nums[p2]) {
                p2++
            }
            p1++
            nums[p1] = nums[p2] ? nums[p2] : nums[p2 - 1]
            count++

            if (nums[p2] === undefined) {
                while (nums[p1] !== undefined) {
                    p1++
                }
            }
        }

    return count;
};
console.log(
    removeDuplicates([0,0,1,1,1,2,2,3,3,4]),//5
    removeDuplicates([1,1,2]),//2
)

// ! This is a nice simple answer that just keeps removing elements if they are a duplicate until it reaches the end of the array
var removeDuplicates = function(nums) {
    for (var i = nums.length - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

// ! Here is about the same answer as me but using a for loop and keeping the logic super simple
var removeDuplicates = function(nums) {
    let idx = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[idx] = nums[i];
            idx++;
        }
    }
    return idx;
}
