/**
 * @param {number[]} nums
 * @return {number}
 */
//  var longestArithSeqLength = function(nums) {

// };
// console.log(
//     longestArithSeqLength()
// );

// var longestArithSeqLength = function(nums) {
//     if (nums === null || nums.length === 0) {
//         return 0;
//     }
//     let diffMap = new Array(nums.length).fill(0).map(() => new Map());
//     let maxLen = 1;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < i; j++) {
//             let diff = nums[i] - nums[j];

//             diffMap[i].set(diff, diffMap[j].get(diff) + 1 || 2);
//             maxLen = Math.max(maxLen, diffMap[i].get(diff));
//         }
//     }
//     return maxLen;
// };

var longestArithSeqLength = function(nums) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    let diffMap = new Array(nums.length).fill(0).map(() => new Map());
    let maxLen = 1;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            // if prev element has an ongoing arithmetic sequence with the same common difference
            // we simply add 1 to the length of that ongoing sequence, hence diffMap[j].get(diff) + 1
            // else, we start a new arithmetic sequence, initial length is 2
            diffMap[i].set(diff, diffMap[j].get(diff) + 1 || 2);
            maxLen = Math.max(maxLen, diffMap[i].get(diff));
            console.log(diffMap);
        }
    }
    return maxLen;
    // T.C: O(N^2)
    // S.C: O(N^2)
};

console.log(
    longestArithSeqLength([3,6,9,12])
);

// Time: O(n ^ 3)
// Space: O(1)
// var longestArithSeqLength = function(A) {
//     // [3, 6] => 2
//     // [3, 6, 9] => [3,6, 9]

//     // start will all possible top 2 elments, and use O(n) to check of longest sequence

//     if (A.length === 2) return 2

//     let max = 2

//     for (let i = 0; i < A.length - 1; i++ ) {
//         for (let j = i + 1; j < A.length ;j++) {
//             const increment = A[j] - A[i]
//             let nextTarget = A[j] + increment
//             let currentLongestLength = 2
//             for (let k = j + 1; k < A.length; k++) {
//                 if (A[k] === nextTarget) {
//                     currentLongestLength += 1
//                     max = Math.max(max, currentLongestLength)
//                     nextTarget += increment
//                 }
//             }
//         }
//     }

//     return max
// };


// ! The below solution is the same memoization solution as above but a little more easy to read for someone that is a beginner like me.
// Time: O(n ^ 2)
// Space: 0 + 1 + 2 + ... => O(n ^ 2)
// for index i, worst case is, add i - 1 entry to Map at i
var longestArithSeqLength = function(A) {
    // cache the result [increment, current longest length] which ends at index

    // f(i) = Map<increment, longest length>
    // f(i + 1) = new Map([
    //    [A[i + 1] - A[j], 2] , // if A[i] has no previous seq of incremnt with A[i + 1] - A[i]
    //    [A[i + 1] - A[j], f[j].get(A[i + 1] - A[j]) + 1]
    // ])  for j in [0, i]

    if (A.length === 2) return 2

    const currentLongestSequenceMapAt = []
    currentLongestSequenceMapAt[0] = new Map()
    currentLongestSequenceMapAt[1] = new Map([[A[1] - A[0], 2]])

    let max = 2

    for (let i = 2; i < A.length; i++ ) {
        const currentMap = new Map()

        for (let j = 0; j < i; j++) {
            const increment = A[i] - A[j]
            // check if there is previous record
            const previousMap = currentLongestSequenceMapAt[j]

            if (previousMap.has(increment)) {
                const length = previousMap.get(increment) + 1
                // just add the new elment as one possbility
                currentMap.set(increment, length)

                max = Math.max(max, length)
            } else {
                currentMap.set(increment, 2)
            }
        }

        currentLongestSequenceMapAt[i] = currentMap
    }

    return max
};