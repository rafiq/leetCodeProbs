/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    let result = []

    for (let i = left; i <= right; i++) {
        if (isValid(i)) result.push(i)
    }

    return result
};
function isValid(num) {
    let numArray = String(num).split("")

        for (let j = 0; j < numArray.length; j++) {
            if (num % +numArray[j] !== 0) return false
        }
        return true;
}
console.log(
    selfDividingNumbers(1, 22),//[1,2,3,4,5,6,7,8,9,11,12,15,22]
    selfDividingNumbers(47,  85),//[48,55,66,77]
)