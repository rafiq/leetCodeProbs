/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // let p2 = 1
    // let p1 = 0;
    // let temp
    // while (p1 < nums.length) {
    //     if (nums[p1] === 0) {
    //         p2 = p1 + 1
    //         while (nums[p2] === 0) {
    //             p2++
    //         }
    //         temp = nums[p2]
    //         nums[p2] = nums[p1]
    //         nums[p1] = temp
    //         // p1++
    //     } else {
    //         p1++
    //     }
    // }
    // while (p1 < nums.length) {
    //     if (nums[p1] === 0) {
    //         nums.splice(p1,1)
    //         nums.push(0)
    //         p1++
    //     }
    //     p1++
    // }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)

        }
    }
    return nums
};
 console.log(
     moveZeroes([0,1,0,3,12]),//[1,3,12,0,0]
     moveZeroes([0]),//[0]
     moveZeroes([0,0,1]),//[1,0,0]
 )