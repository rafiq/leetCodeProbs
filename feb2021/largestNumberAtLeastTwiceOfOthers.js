/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // let largestIdx = 0;
    // let largestValue = 0;
    // for (let i =0; i<nums.length;i++){
    //     if(largestValue < nums[i]){
    //         largestIdx = i;
    //         largestValue = nums[i];
    //     }
    // }
    // for(let i = 0; i<nums.length;i++){
    //     let product = nums[i] * 2;
    //     if(largestIdx === i) {

    //     }else if(largestValue < product){
    //         return -1;
    //     }
    // }
    // return largestIdx;
    // console.log(largestValue)

    // The below code was from
    // let max = Math.max(...nums);
    // // let maxIndex = nums.indexOf(max);

    // for (const i of nums) {
    //     if (nums[i] === max) {
    //         let maxIndex = i;
    //     }
    //     if (nums[i] !== max && nums[i] < 2 * (nums[i])) {
    //         return -1;
    //     }
    // }
    // return maxIndex;
    // This is very frustrating because I am sure my code below should be working, but it is not, and I am not sure why. It is because of the test cases [0,1] and = [1,0];
    let sortedNums = nums.sort((a,b) => a - b);
    let largestNum = sortedNums[sortedNums.length - 1];
    let secondLargestNum = sortedNums[sortedNums.length - 2]
    let twice = secondLargestNum * 2;
console.log(sortedNums)
    if (nums.length == 1) {
        return 0;
    }
    if (largestNum >= twice) {
        return nums.indexOf(largestNum);
    } else {
        return -1;
    }
    // We could sort and do a binary search if speed is the concern.

    // We could sort and return the last number, then check to see if the number before it is at least twice the last number.
};
console.log(
dominantIndex([3, 6, 1, 0]), // 1
dominantIndex([1, 2, 3, 4]),//-1
dominantIndex([1,0]),//0
dominantIndex([0,1]),//1
dominantIndex([1]),//0
dominantIndex([0,0,2,3])//-1
)
// In a given integer array nums, there is always exactly one largest element.

// Find whether the largest element in the array is at least twice as much as every other number in the array.

// If it is, return the index of the largest element, otherwise return -1.