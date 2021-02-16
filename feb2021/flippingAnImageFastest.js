// This was a smooth way to answer this question where they mapped over each element or array row and reversed it. Then they mapped over each element of each row and changed the zeros to one and ones to zeros.

var flipAndInvertImage = function(A) {
    return A.map((a) => a.reverse().map((b) => b === 0 ? 1 : 0));
};
