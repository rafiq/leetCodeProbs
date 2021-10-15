/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {

    let result = Array(s.length - 1).fill(0)
    let targetArray = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) targetArray.push(i)
    }

    for (let i = 0; i < s.length; i++) {
        temp = []
        for (let j = 0; j < targetArray.length; j++) {
            temp.push(Math.abs(i - targetArray[j]))
        }
        result[i] = Math.min(...temp)
    }

    return result
};
console.log(
    shortestToChar("loveleetcode", "e"),
    shortestToChar("aaab", "b"),
)