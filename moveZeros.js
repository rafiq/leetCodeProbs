/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let anchor = 0;

    for( let explorer = 0; explorer < nums.length; explorer++) {
        if(nums[explorer] !== 0) {
            let temp = nums[anchor];
            nums[anchor] = nums[explorer];
            nums[explorer] = temp;
            anchor++;
        }
    }
    return nums;
};
// var moveZeroes = function(nums) {
//     let temp = [];
//     let pointer2 = 1;

//     while (i < nums.length) {
//         for (let i = 0; i < nums.length; i++) {

//             if (i === 0 && nums[pointer2] === 0) {
//                 pointer2 += 1;
//             } else if (i === 0 && nums[pointer2] !== 0) {
//                 //switch
//                 i++;
//                 pointer2 += 1;
//             }

//         }

//     }

//     return nums;
// };

console.log(moveZeroes([0,1,0,3,12]))  //[1,3,12,0,0]
