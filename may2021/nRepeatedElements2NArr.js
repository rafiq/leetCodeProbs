/**
 * @param {number[]} A
 * @return {number}
 */
 var repeatedNTimes = function(A) {
    for (let i = 0; i < A.length; i++) {
        if (A.indexOf(A[i]) !== A.lastIndexOf(A[i])) return A[i]
    }
    return -1;
};
console.log(
    repeatedNTimes([1,2,3]),//3
    repeatedNTimes([2,1,2,5,3,2]),//2
    repeatedNTimes([5,1,5,2,5,3,5,4]),//5
)