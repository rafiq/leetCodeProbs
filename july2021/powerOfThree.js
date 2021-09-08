/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    let power = 0;
    let count = Math.pow(3,power)

    while (count <= n) {
        if (count === n) return true
        power++;
        count = Math.pow(3,power)
    }

    return false;
};
console.log(isPowerOfThree(1))