/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMiddleIndex = function(nums) {
     if (nums.length === 1) return 0;

     const sumArray = arr => {
         return arr.reduce((acc,curr) => acc + curr, 0);
     }
    let left = 0;
    let right = sumArray(nums.slice(1));

    for (let i = 0; i < nums.length; i++) {
        if (left === right) return i;
        console.log(left, right)
        left += nums[i];
        if (nums[i + 1] !== undefined) {
            right -= nums[i + 1];
        } else {
            right = 0;
        }
        // if (left === right) return i;
        // console.log(left, right)
    }

    return -1;
};
console.log(
    // findMiddleIndex([2,3,-1,8,4]),//3
    // findMiddleIndex([1,-1,4]),//2
    findMiddleIndex(
        [-3,0,2,-3]),//2
    // findMiddleIndex([2,5]),//-1
)