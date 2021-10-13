/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canThreePartsEqualSum = function(arr) {
    // var sum = getSumOfArray(arr);
    // if (sum % 3) return false;

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //             if (getSumOfArray(arr.slice(0,i)) === getSumOfArray(arr.slice(i,j)) && getSumOfArray(arr.slice(j)) === getSumOfArray(arr.slice(i,j))) return true;
    //     }
    // }

    // return false;

    // return getSumOfArray([1,2,3,4])
    let sum = arr.reduce((acc,cur) => acc + cur) / 3;
    let s = 0, count = 0;
    for (let num of arr) {
        s += num;
        if (s === sum) {
            count++;
            s = 0;
        }
    }
    return count >= 3;
};
function getSumOfArray(arr) {
    return arr.reduce((acc,curr) => acc + curr,0);
}
console.log(
    canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1]),//
    canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1]),//
    canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4]),//
    canThreePartsEqualSum(
        [18,12,-18,18,-19,-1,10,10]),//true;
)