/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
 var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let hashMap = new Set();
    let currentSegment = "";

    for (let i = 0; i < s.length - minSize + 1; i++) {
        currentSegment = s.slice(i, i + minSize);
        if (new Set(currentSegment).size <= maxLetters) {
            hashMap[currentSegment] ? hashMap[currentSegment]++ : hashMap[currentSegment] = 1
            // console.log(currentSegment,new Set(currentSegment).size)
        }
    }
    // console.log(hashMap)
    if (Object.entries(hashMap).length < 1) return 0
    return Object.entries(hashMap).sort((a,b) => b[1] - a[1])[0][1];
};
console.log(
    maxFreq("aababcaab",2, 3, 4 ),//2
    maxFreq("aaaa", 1,  3,  3),//2
    maxFreq("aabcabcab", 2,  2, 3),//3
    maxFreq("abcde"
    ,2
    ,3
    ,3),//0
)