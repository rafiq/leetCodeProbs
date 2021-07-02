/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;

    nums.forEach(number => {
        if (number.toString().length % 2 === 0) {
            count++;
        }
    })

    return count;
};
console.log(
    findNumbers([12,345,2,6,7896]),//2
    findNumbers([555,901,482,1771]),//1
)