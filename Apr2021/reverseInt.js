#!/usr/bin/env node

// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer

 /* @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let res = x >= 0 ? Number((''+x).split('').reverse().join('')) : Number('-'+(''+x).substr(1).split('').reverse().join(''));
    if ( res >= Math.pow(2,31)-1 || res <= -(Math.pow(2,31)-1) ) return 0;
    else return res;

    // let strCharArray = x.toString().split("");
    // if (strCharArray[0] === "-") {
    //     return  "-" + Number(strCharArray.slice(1).reverse().join(""))
    // }
    // return Number(strCharArray.reverse().join(""));
};
console.log(reverse(123));  // Output: 321
console.log(reverse(-123));  // Output: -321
console.log(reverse(120));  // Output: 21
console.log(reverse(0));  // Output: 0
console.log(reverse(1534236469));  // Output: 0

// Time and Space Complexity
// =========================
// Time Complexity: O(__REPLACE_ME__)
// Space Complexity: O(__REPLACE_ME__)


// Tests
// =====
//
// LeetCode Examples

// Additional Examples
// {{ADDITIONAL_EXAMPLES}}
