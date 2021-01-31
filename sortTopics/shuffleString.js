/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let sortedArray = [];
    for (let i = 0; i < s.length; i++) {
        sortedArray[indices[i]] = s[i];
    }
    return sortedArray.join("");
};
// var restoreString = function(s, indices) {
//     let sortedArray = [];

//     indices.map((num) => {
//        return sortedArray[indices] = s[num]
//     },0)
//     console.log(sortedArray);
// };

restoreString("codeleet",[4,5,6,7,0,2,1,3]);
restoreString("aiohn",[3,1,4,2,0]);

// Given a string s and an integer array indices of the same length.

// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.