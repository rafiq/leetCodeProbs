/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {



    let halfCount = Math.floor(nums.length / 2);
    let mapping = nums.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})

    let max = Object.values(mapping);
    let targetIndex =  max.indexOf(Math.max(...max));
    let targetNum = Object.keys(mapping);
    return +targetNum[targetIndex]
};
console.log(
    majorityElement([3,2,3]),//3
    majorityElement([2,2,1,1,1,2,2]),//2
)