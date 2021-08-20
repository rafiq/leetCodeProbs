/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a,b) => a - b)
    let difference = arr[0] - arr[1];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] - arr[i] !== difference) return false;
    }

    return true;
};
console.log(
    canMakeArithmeticProgression([3,5,1]),//true;
    canMakeArithmeticProgression([1,2,4]),//false
)