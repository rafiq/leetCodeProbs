/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var findLUSlength = function(a, b) {

    let shortestStr = "";
    let longestStr = "";
    a.length < b.length ?   [shortestStr, longestStr] = [a,b] : [longestStr,shortestStr] = [a,b];
    let result = longestStr.length;
    let indexArray = [];

    for (let i = 0; i < shortestStr.length; i++) {
        let char = shortestStr[i];
        let prevChar = shortestStr[i - 1];

        if (longestStr.match(char) && longestStr.indexOf(char) > longestStr.indexOf(prevChar)) {
            indexArray.push(longestStr.match(char).index)
          result--;
        }
    }
    // if (isSameOrder(indexArray)) return result;
    // else {
    //     return result -
    // }
    // if (indexArray.length === 0) return 0;
    return Math.abs(result - indexArray.length);
};
function isSameOrder(haystack) {
    return haystack.sort((a,b) => a - b) === haystack;
}
console.log(
    findLUSlength("aba","cdc"),//3
    findLUSlength("aaa", "aaa"),//0
    findLUSlength("abc" , "aebdc"),//2?
)