/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    let blankArray = new Array(n).fill(0)
    return new Array(n).fill(0).map((m, i) => i * 2 - n + 1);
    // for (let i = 0; i < n; i++) {
    //     if (!sumArray(blankArray) && !isDuplicates(blankArray)) {
    //         return blankArray
    //     } else {
    //         blankArray[i] = -i
    //     }
    // }

    // while (sumArray(blankArray) && isDuplicates(blankArray)) {
    //     for (let i = 0; i < blankArray.length; i++) {
    //         blankArray[i] = Math.floor(Math.random() * 10)
    //     }
    // }
    // return blankArray
};
function sumArray(arr) {
    return arr.reduce((acc,curr) => acc + curr,0) === 0
}
function isDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return true;
    }
    return false;
}
console.log(
    sumZero(5)
)
