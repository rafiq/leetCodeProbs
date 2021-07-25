/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {


    let sortedArray = nums.sort((a,b) => a - b);

    return (sortedArray[sortedArray.length - 1] - 1) * (sortedArray[sortedArray.length - 2] - 1)
};
console.log(
    maxProduct([3,4,5,2]),//12
    maxProduct([3,7]),//12
    maxProduct([1,5,4,5]),//16
    maxProduct([10,2,5,2]),//36
)

// ! how is this the fastest
// This answer is using math.max twice. I would think that a regular for loop and changing the variables around would be faster.
var maxProduct = function(nums) {
    let maxFirst = Math.max(...nums);
    nums.splice(nums.indexOf(maxFirst), 1);
    let maxSecond = Math.max(...nums);

    return (maxFirst - 1) * (maxSecond - 1);
};

// The below is what I came up with in pseudo code to solve this problem faster, but another answer which is like my original is faster than the for loop
var maxProduct = function(nums) {
    let firstMax = 0;
    let secondMax = 0;
    let flag = false;

    for(let num of nums) {
        if(num > firstMax) {
            secondMax = firstMax;
            firstMax = num;
            flag = true;
        }
        if(!flag && firstMax >= num && num > secondMax) {
            secondMax = num;
        }

        flag = false;

    }
    return ((firstMax-1)* (secondMax - 1))
};