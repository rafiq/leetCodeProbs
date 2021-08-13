/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let sqroot = Math.sqrt(n)

    for (let i = n; i >= 0; i--) {
        if (Math.pow(2,i) === n) return true
    }

    return false
};
console.log(
    // isPowerOfTwo(16),//true
    // isPowerOfTwo(3),//true
    // isPowerOfTwo(5),//true
    // isPowerOfTwo(4),//true
    isPowerOfTwo(1),//true
    isPowerOfTwo(8),//true
)