/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfDigits = function(nums) {

    nums = nums.sort((a,b) => a - b);

    return getSumDigits(nums[0]) % 2 === 1 ? 0 : 1;
};
function getSumDigits(num) {
    let sum = 0;
    num = String(num).split("");

    for (let digit of num) {
        sum += +digit;
    }

    return sum;
}
console.log(
    sumOfDigits([34,23,1,24,75,33,54,8]),
    sumOfDigits([99,77,33,66,55]),
);