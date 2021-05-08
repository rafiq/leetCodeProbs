/**
 * @param {sum[]} nums
 * @return {sum}
 */
 var arrayPairSum = function(nums) {
    var sum = 0;

    nums.sort((a,b) => a - b);
    for (var i = 0; i < nums.length; i += 2) {
    	sum += nums[i];
    }
    return sum;
    // let numOfPairs = nums.length / 2;
    // let possiblePairs = [];

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         //how many pair instances?

    //         //make all possible pairs
    //         possiblePairs.push(Math.min(nums[i],nums[j]))
    //     }
    // }
    // return possiblePairs.sort((a,b) => b - a);
};
console.log(
    arrayPairSum([1,4,3,2]),
    arrayPairSum([6,2,6,5,1,2])
)