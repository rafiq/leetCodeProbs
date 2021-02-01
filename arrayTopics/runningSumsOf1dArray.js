/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let array = [];
    let sum = 0;

    nums.map(num => {
        return array.push(sum += num);
    },0)

    return array;
};

runningSum([1,2,3,4]);
runningSum([1,1,1,1,1]);
runningSum([3,1,2,10,1]);