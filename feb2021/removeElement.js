/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            i -= 1;
        }
    }
    return nums.length;
    // nums.forEach(num => {
    //     if (num === val) {
    //         num.pop();
    //     }
    //     return nums.length;
    // })
};

console.log(
    removeElement([3,2,2,3],3),//2
    removeElement([0,1,2,2,3,0,4,2], 2),//5
    removeElement([0,1,2,2,3,0,4,2],2),//5
)