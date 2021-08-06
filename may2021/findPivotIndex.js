/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = sumArray(nums);

    for (let i = 0; i < nums.length; i++) {
        console.log(leftSum,rightSum)
        if (leftSum === rightSum && i !== 0) {
            return i - 1;
        } else if (leftSum === rightSum) {
            return i;
        } else {
            leftSum = sumArray(nums.slice(0,i));
            rightSum = sumArray(nums.slice(i + 1))
        }
    }
    return -1
};
function sumArray(array) {
    return array.reduce((acc,curr) => acc + curr,0)
}
console.log(
    // pivotIndex([1,7,3,6,5,6]),//3
    // pivotIndex([1,2,3]),//-1
    // pivotIndex([2,1,-1]),//0
    pivotIndex(
        [-1,-1,0,1,1,0]),//5
)
var pivotIndex = function(nums) {
    var len = nums.length;
    var sumLeft = 0;
    var sum = nums.reduce((a, b) => a + b, 0);
    for (var i = 0; i < len; i++) {
        sumLeft += nums[i];
        if (sumLeft === sum - sumLeft + nums[i]) {
            return i;
        }
    }
    return -1;
};