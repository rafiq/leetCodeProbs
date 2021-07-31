/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    let sortedArray = arr.sort((a,b) => a - b);
    let minDiff = Infinity;
    let result = [];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] - sortedArray[i] < minDiff) minDiff = sortedArray[i + 1] - sortedArray[i]
    }
    for (let i = 0; i < sortedArray.length - 1; i++) {
        let curr = sortedArray[i];

        if (sortedArray[i + 1] - sortedArray[i] === minDiff) {
            result.push([curr,sortedArray[i + 1]])
        }
    }

    return result
    // let sortedArray = arr.sort((a,b) => a - b);
    // let minDiff = Infinity;
    // let result = [];

    // for (let i = 0; i < sortedArray.length - 1; i++) {
    //     if (sortedArray[i + 1] - sortedArray[i] < minDiff) minDiff = sortedArray[i + 1] - sortedArray[i]
    // }
    // for (let i = 0; i < sortedArray.length; i++) {
    //     let curr = sortedArray[i];

    //     if (sortedArray.indexOf(curr + minDiff) !== -1) {
    //         result.push([curr,sortedArray[sortedArray.indexOf(curr + minDiff)]])
    //     }
    // }

    // return result
};
console.log(
    // minimumAbsDifference([4,2,1,3]),//[[1,2],[2,3],[3,4]]
    // minimumAbsDifference([1,3,6,10,15]),//[1,3,6,10,15]
    minimumAbsDifference([3,8,-10,23,19,-4,-14,27]),//[1,3,6,10,15]
)