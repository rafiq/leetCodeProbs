/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumProduct = function(nums) {
    // let sorted = nums.sort((a,b) => a-b), len = nums.length;
    // let res1 = sorted[0]*sorted[1]*sorted[len-1],
    //     res2 = sorted[len-1]*sorted[len-2]*sorted[len-3]
    // return Math.max(res1,res2);
    // ! My answer below worked but was way too slow
    // let max = -Infinity;
    // nums = nums.sort((a,b) => b - a)
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             if (nums[i] * nums[j] * nums[k] > max) max = nums[i] * nums[j] * nums[k]
    //         }
    //     }
    // }

    // return max;

    // ! Below is the fastest solution which did the same work as above but used a for loop to get through the work faster.
    let n = nums.length;
    let min1 = Number.MAX_VALUE, min2 = Number.MAX_VALUE,
    //    max1 = -1234353535, max2 = -1234353535,max3 = -1234353535;
    max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        if (nums[i] >= max1){
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] >= max2) {
            max3 = max2;
            max2 = nums[i];
        } else if (nums[i] >= max3) {
            max3 = nums[i];
        }

        if (nums[i] <= min1){
            min2 = min1;
            min1 = nums[i];
        } else if (nums[i] <= min2){
            min2 = nums[i];
        }
    }

    return Math.max(min1 * min2 * max1 , max1 * max2 * max3);
};
console.log(
    maximumProduct([1,2,3]),//6
    maximumProduct([-1,-2,-3]),//-6
    maximumProduct([1,2,3,4]),//24
)