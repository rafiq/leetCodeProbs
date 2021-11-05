/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumSmaller = function(nums, target) {
    // let count = 0;
    // nums = nums.sort((a,b) => a - b);

    // for (let i = 0; i + 2 < nums.length; i++) {
    //     for (let j = i + 1; j + 1 < nums.length; j++) {
    //         for (let k = j + 1; k < nums.length; k++){
    //             if (nums[i] + nums[j] + nums[k] < target) {
    //                 count++;
    //                 console.log(nums[i],nums[j],nums[k]);
    //             }
    //         }
    //     }
    // }
    // return count;
    // let res=  0
    // for (let i=0;i<nums.length;i++) {
    //     for (let j=i+1;j<nums.length;j++) {
    //         for (let k=j+1;k<nums.length;k++) {
    //             if (nums[i]+nums[j]+nums[k] < target) {
    //                 res++
    //             }
    //         }
    //     }
    // }
    // return res
    if (nums.length < 3) return 0

    nums.sort((a,b) => a - b)

    let result = 0;

    for (let i = 0; i + 2 < nums.length; i++) {
        let start = i + 1;
        let end = nums.length - 1;

        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            if (sum < target) {
                result += end - start;
                start += 1;
            } else {
                end -= 1;
            }
        }
    }
    return result;
    // return target
 }
    // return result;
//     nums.sort((a,b) => a-b);
//     let total = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let targetTwoSum = target - nums[i];
//         total += twoSum(nums, i+1, nums.length-1, targetTwoSum)
//     }
//     return total;
//     // T.C: O(N^2)
//     // S.C: O(N)
// };

// const twoSum = (nums, low, high, target) => {
//     let count = 0;
//     while (low < high) {
//         let sum = nums[low] + nums[high];
//         if (sum >= target) {
//             high--;
//         } else {
//             // Suppose low: 0, high: 2, target: 4
//             // nums[low] + nums[high] is less than target, which means
//             // nums[low] + nums[low+1], nums[low] + nums[low+2],
//             // .... nums[low] + nums[high] all have a sum less than target
//             // Hence, number of possible two sums with nums[low] as the first number
//             // of the sum is high - low.
//             count += high - low;
//             low++;
//         }
//     }
//     return count;
// };
console.log(
    threeSumSmaller([-2,0,1,3],2),//2
);