/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 0;
    let high = Math.ceil(x/2);

    while (low <= high) {
        let mid = Math.floor((low + high)/2);
        if (mid * mid === x) {
            return mid;
        }

        if (x < mid * mid) {
            high = mid - 1;
        } else {
            low =  mid + 1;
        }
    }
    return high;
};
// So here we go again. While my code (see below) worked to solve this basic problem, I used JS built in methods, and I want to solve this using the binary search method. So after I submitted I looked at the fastest code (see above) and I can see and understand the binary search happening in lines 15 to 18, but I can't explain line 7 and 10. Why divide x by 2 in line 7? Why add low to high and divide by 2 in line 10?

// var mySqrt = function(x) {
//     return Math.floor(Math.sqrt(x));
// };

// console.log(mySqrt(8));
// // Given a non-negative integer x, compute and return the square root of x.

// // Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.