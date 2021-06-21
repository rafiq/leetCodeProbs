/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves = function(nums) {
    // let count = 0;

    // while (!nums.every(el => nums[0] === el)) {
    //     for (let i = 0; i < nums.length - 1; i++) {
    //         nums[findMin(nums)] += 1;
    //     }
    //     count++;
    // }
    // return count;
    let total = 0;
    nums.sort((a,b) => a - b);

    for (let i = 0;i < nums.length;i++) {
        total += nums[i];
    }
    let result = total - nums[0] * nums.length;

    return result;
};
function findMin(array) {
    let min = Math.min(...array);
    return array.indexOf(min);
}
console.log(
    minMoves([1,2,3]),//3;
    minMoves([1,1,1]),//1
    minMoves([1,1,1,4,5,6]),//1
    minMoves([6,6,6,6,6]),//1

)