/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.trim()
    return s.split(" ").slice(-1)[0] ? s.split(" ").slice(-1)[0].length : 0;
    // return s.split(" ").slice(-1)[0].length
};
console.log(
    lengthOfLastWord("Hello World"),//5
    lengthOfLastWord(" "),//0
    lengthOfLastWord("a "),//0
)