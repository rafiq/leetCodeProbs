/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
// This code is great because I wanted to practice making object keys and references them later in the code. This helps with many problems. I got tripped up because I didn't know that I could assign each row(subarray) to an index the way the answer below does.
var kWeakestRows = function(mat, k) {
    function getPower(row) {
        let res = 0;
        for (let i of row) {
            if (i == 0) {
                return res
            }
            res++;
        }
        return res;
    }

    let resrows = {};
    mat.forEach((row, index) => {
        resrows[index] = getPower(row)
    });
    return Object.keys(resrows).sort((a,b) => resrows[a] - resrows[b]).slice(0,k);
};

// My code below was wrong, but I think I was on the right track.
// var kWeakestRows = function(mat, k) {
//     let tempArray = [];
//     let total = 0;

//     for (let arr in mat) {
//         for(let element in arr) {
//             return total += arr[element];
//         }
//     }
//     return total;
// };

console.log(kWeakestRows([[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]],2))

// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.

// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j, or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.