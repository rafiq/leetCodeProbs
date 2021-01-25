/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let index = 0; index < nums.length; index++) {
        if(target <= nums[index]) {
            return index;
        }

    }
    return nums.length;
}

console.log(searchInsert([1,3,5,6],0));
console.log(searchInsert([1,3,5,6],7));
console.log(searchInsert([1,3,5,6],2));
// My answer below was incorrect, and I saw one guy solve this using a binary search of two pointers which at first seemed very strange and difficult to me. Then I saw another video use a for loop and explain it a lot better.
// var searchInsert = function(nums, target) {
//     if(nums.indexOf(target) !== -1) {
//         return nums.indexOf(target);
//     } else {
//         let index = 0;
//         while(target >= nums[index]) {

//             if(target === 0 || index > nums.length) {
//                 return index;
//             } else  {
//                 index++;
//             }
//         }
//         return index;
//     }
// };


// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//

// The below is the fastest answer which seems to be the binary search again. Where is splits the array in half and then sees if the target is less than the midpoint. If it is, then the left pointer increments, but if it is not, then the right pointer decrements. I don't understand the logic at the very end where new if statement. I also don't understand all the math to get the half mark. IN regards to the math, I believe it has something to do with dealing with odd lengths because their half way mark is not an integer. So maybe that math is to get an integer.

// // var searchInsert = function(nums, target) {
//     if(!nums || nums.length === 0) return 0;
//     let left = 0;
//     let right = nums.length - 1;
//     let mid;
//     while(left < right){
//        mid = Math.floor(left + (right - left)/2);
//        if(nums[mid]<target){
//            left = mid + 1;
//        }else{
//            right = mid;
//        }
//     }
//     return (nums[left] < target ? left + 1 : left);
// };