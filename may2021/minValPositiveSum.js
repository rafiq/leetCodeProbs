/**
 * @param {number[]} nums
 * @return {number}
 */
 var minStartValue = function(nums) {
    let startValue = 0;

    while (!isAboveZero(startValue,nums)) {
        startValue++;
    }
    return startValue;
};
function isAboveZero(num, arr) {
    let sum = num

    for (let i = 0; i < arr.length + 1; i++) {
        // console.log(sum)
        if (sum < 1) return false;
        sum += arr[i];
    }

    return true;
}
console.log(
    minStartValue([-3,2,-3,4,2]),//5
    minStartValue([1,2]),//1
    minStartValue([1,-2,-3]),//5
)