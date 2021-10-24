/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
 var findKthPositive = function(arr, k) {
    let result = [];

    for (let i = 1; i < k + arr.length; i++) {
        if (!arr.includes(i)) {
            result.push(i);
        }
    }

    return result[k - 1];
};
console.log(
    findKthPositive([2,3,4,7,11],  5),
    findKthPositive([1,2,3,4],  2),
)