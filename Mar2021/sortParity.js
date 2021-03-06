/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let newArray = [];

    for (let i = 0; i < A.length; i++) {
        A[i] % 2 === 0 ? newArray.unshift(A[i]) : newArray.push(A[i]);
    }

    return newArray;
    // let evens = [];
    // let odds = [];
    // while (A.length > 0) {
    //     let current = A.shift();
    //     if (current % 2 === 0) evens.push(current);
    //     else odds.push(current);
    // }
    // return A.push(...evens,...odds);
};

console.log(
    sortArrayByParity([3,1,2,4]),//2,4,3,1]
    // The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3]
)