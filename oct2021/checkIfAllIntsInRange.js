/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
 var isCovered = function(ranges, left, right) {
    // let lowerRangeContained = false;
    // let upperRangeContained = false;

    // ranges.forEach(el => {
    //     el.forEach(num => {
    //         if (num >= left) lowerRangeContained = true;
    //         if (num <= right) upperRangeContained = true;
    //     })
    // })
    // return lowerRangeContained && upperRangeContained;
    ranges.sort((A, B) => (A[0] - B[0]) || (A[1] - B[1]))
    for (const range of ranges.values()) {
        const [start, end] = range
        if (start > left)   return false
        if (end < left) continue

        left = 1 + end
        if (left > right)   return true
    }


    return false
};
console.log(
    isCovered([[1,2],[3,4],[5,6]], left = 2, right = 5),//true
    isCovered([[1,10],[10,20]], left = 21, right = 21),//false
    isCovered([[1,1]],
        1
        ,50),//false
);