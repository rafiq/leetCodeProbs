/**
 * @param {number} n
 * @return {number}
 */

// ! WOW
// Putting this object outside the function moved the speed from 5% to 77%!! That is crazy!
let mapping = {};
var fib = function(n) {
    if (n < 2) return n;
    if (mapping[n]) return mapping[n];

    let sum = fib(n - 1) + fib(n - 2);
    mapping[n] = sum;

    return sum;
    // ! The below is my second attempt which was a recursive attempt but that was slower than my first for loop attempt
    // if (n === 0) return 0;
    // if (n === 1 || n === 2) return 1;
    // let sum = 0;

    // sum += fib(n - 1) + fib(n - 2);

    // return sum;
// ! This was my first attempt that worked but was only faster than ~40% of submissions.
    // let sum = 0;
    // let sequence = [1,1]
    // for (let i = 2; i < n; i++) {
    //     console.log(sum)
    //     sum += (sequence[i - 2]) + (sequence[i - 1])
    //     sequence.push(sum)
    //     sum = 0
    // }
    // return sequence[sequence.length - 1]
};
console.log(
    fib(4),//3
    fib(2),//1
    fib(3),//2
    fib(5),//2
    fib(6),//2
)