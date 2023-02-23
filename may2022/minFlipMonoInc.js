/**
 * @param {string} s
 * @return {number}
 * What about various inputs(nums)?
 * What about empty string
 Change input string?
 */
 var minFlipsMonoIncr = function(s) {
    let flips = 0;
    let numOfOnes = 0;
// keep track of ones after the first zero and that will increment our flip counter
    for (let num of s) {
        if (num === "1") numOfOnes++;
        // if we hit a zero and our num of ones is above zero, then we decrement numOfOnes and add to flip count
        else if (numOfOnes > 0) {
            flips++;
            numOfOnes--;
        }
    }
// return flips
    return flips;

// string len  / the number of zeros in front?
    let len = s.length;
    let PrefixSum = Array(len + 1).fill(0);

    for (let i = 0; i < len; i++) {
        PrefixSum[i + 1] = PrefixSum[i] + s.charAt(i) === "1" ? 1 : 0;
    }
    let result = Infinity;
    for (let i = 0; i <= len; i++) {
        result = Math.min(result, PrefixSum[i] + len - i - (PrefixSum[len] - PrefixSum[i]))
    }

    return  result;
};

console.log(
    minFlipsMonoIncr("010110"),//
);

/**
 *
 *
 */
