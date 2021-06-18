/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
     let charMap = {
         b:0,a:0,l:0,o:0,n:0
     }
    charMap = text.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },charMap)

    return Math.min(charMap["b"], charMap["a"], Math.floor(charMap["l"] / 2), Math.floor(charMap["o"] / 2), charMap["n"]);
    // const map = Object.fromEntries('balloon'.split('').map(a => [a, 1]));
    // return map
};
function isBalloon(haystack,needle) {
    return !Object.entries(haystack).every(el => needle[el[0]] <= el[1])
}
console.log(
    maxNumberOfBalloons("nlaebolko"),//1
    maxNumberOfBalloons("loonbalxballpoon"),//2
    maxNumberOfBalloons("leetcode"),//0
    maxNumberOfBalloons("lloo"),//0
)