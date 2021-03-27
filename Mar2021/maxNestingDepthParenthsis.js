/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    s.split("").forEach(char => {
        if (char === "(") {
            count++;
            max = Math.max(count, max)
        } else {
            if (char === ")") {
                count--;
            }
        }
    })
    return max;
};
console.log(
    maxDepth("(1+(2*3)+((8)/4))+1"),//3
    maxDepth("(1)+((2))+(((3)))"),//3
    maxDepth("1+(2*3)/(2-1)"),//1
    maxDepth("1"),//0
)