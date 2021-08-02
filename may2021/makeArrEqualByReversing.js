/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    //  Faster than 78%
    arr = arr.sort((a,b) => a - b);
    target = target.sort((a,b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        if (target[i] !== arr[i]) return false
    }
    return true

    // Faster than 38%
    // arr = arr.sort((a,b) => a - b);
    // target = target.sort((a,b) => a - b)

    // for (let i = 0; i < arr.length; i++) {
    //     if (!arr.includes(target[i]) || target[i] !== arr[i]) return false
    // }
    // return true
};
console.log(
    canBeEqual([1,2,3,4], [2,4,1,3]),//true
    canBeEqual([3,7,9], [3,7,11]),//false
    canBeEqual([1,2,2,3]
        ,[1,1,2,3]),//false
    canBeEqual([1,12],[12,1]),//true
    canBeEqual([392,360],
        [392,360]),//true
)