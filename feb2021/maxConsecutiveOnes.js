/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // let prev = -1;
    // let result = 0;

    // for (let i = 0; i < nums.length + 1; i++) {
    //     if (nums[i] !== 1) {
    //         result = Math.max(result, i - prev - 1)
    //         prev = i;
    //     }
    // }
    // return result;

// My attempt below failed, but I think it could have worked. I used the two pointers technique.
    //     let i = 0;
//     let j = 0;
//     let count = 0;
//     let maxNum = 0;

//     while (j < nums.length) {
//         if (nums[i] === 1 && nums[j] === 1) {
//             j++;
//             i++;
//             count++;
//             if (maxNum < count) {
//                 maxNum = count;
//             }
//         }
//         j++;
//         if (nums[j] === 0) {
//             count = 0;
//         }
//     }
// return maxNum;
    // The below code almost worked but got caught up with the commas.
    // let maxArray = [];
    // let numsArray = nums.toString().split("0");

    // return numsArray[1].split("").toString().replace(",","");
    let max = 0;
    let temp = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            temp++;
            if (max < temp) {
                max = temp;
            }
        } else {
            temp = 0;
        }
    }
    return max;
    // return maxArray.length;
};

console.log(
    findMaxConsecutiveOnes([1,1,0,1,1,1]),//3
    findMaxConsecutiveOnes([1,0,1,1,0,1]),//3
)