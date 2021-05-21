/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var threeConsecutiveOdds = function(arr) {

    for (let i = 0; i < arr.length - 2; i++) {
        if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) return true;
    }
    return false;
};
function isOdd(num) {
    return num % 2 === 1;
}
console.log(
    // threeConsecutiveOdds([2,6,4,1]),//false;
    // threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]),//true
    threeConsecutiveOdds([1,1,1]),//true
)