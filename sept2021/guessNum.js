/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let range = [0, n];

    while (true) {
        let mid = Math.floor(range[0] + range[1]) / 2;
        if (guess(mid) === 0) return mid;
        else if (guess(mid) === 1) {
            range[0] = mid + 1;
        } else {
            range[1] = mid - 1;
        }
    }


};
console.log(
    guessNumber(10)
)

let l = 1, r = n;
while (l <= r) {
    let mid = Math.floor((l+r)/2);
    if (guess(mid) == 0) return mid;
    else if (guess(mid) == 1) l = mid+1;
    else r = mid-1;
}