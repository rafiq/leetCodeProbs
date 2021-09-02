/**
 * @param {number} x
 * @return {number}
 */
//  var reverse = function(x) {
//      if (x > 0x7FFFFFFF) return 0;

//      [-231, 231 - 1]
//      let xStr = String(x).split("");
//      let start = 0;
//      let sign = "";
//      let temp = 0;
//     if (xStr[0] === "-") {
//         sign = "-";
//         xStr = xStr.slice(1);
//     }
//     let end = xStr.length - 1;
//     for ( ; start < xStr.length / 2; start++) {
//         temp = xStr[start]
//         xStr[start] = xStr[end];
//         xStr[end] = temp
//         end--;
//     }
//     if (+xStr.join("") > 0x7FFFFFFF) return 0;
//     return Number(sign + xStr.join(""))
//     // return Number.MAX_SAFE_INTEGER > 1534236469
// };

// ! This result uses arthematic to solve this problem and checks for the size of the integer at the end
var reverse = function(x) {
    if (x === 0) return 0;
    let dividend = 0;
    let result = 0;
    while (x) {
        console.log(
            dividend,
            result,
            x,
            x % 10,
            result * 10,

            )
            dividend = x / 10 | 0;
            result = result * 10 + x % 10;
            x = dividend;
        }
        // this is only for 32bit int support. Otherwise, can return the result directly, if not 32bit constraints
        return (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) ? 0 : result;
    };
console.log(
    reverse(-123),//
    // reverse(123),//
    // reverse(120),//
    // reverse(0),//
    // reverse(1534236469),//
)