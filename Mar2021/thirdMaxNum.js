/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = Math.max(...nums);
    if (nums.length < 3) return max;
    let sortedArray = nums.sort((a,b) => b - a);
    let counter = 0;

    while (counter < 3) {
        for (let i = 1; i < sortedArray.length; i++) {

            if (sortedArray[i - 1] > sortedArray[i]) {
                counter++;
            }
            if (counter === 2) return sortedArray[i];
        }
        if (counter < 2) return max;

    }
    // return sortedArray[counter];
};

console.log(
    thirdMax([3,2,1]),//1
    thirdMax([2,2,3,1]),//1
    thirdMax([1,1,2]),//2
)