/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            arr.pop();
            i += 1;
        }
    }
    return arr;
};

console.log(
    duplicateZeros([1,0,2,3,0,4,5,0]),//null
    duplicateZeros([1,2,3]),//null
)

// Duplicate Zeros

// Solution
// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.