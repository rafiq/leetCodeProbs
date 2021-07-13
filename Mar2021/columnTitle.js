/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {

    return

    // return columnTitle[0].charCodeAt() - 64;
    // let result = 0;

    // for (var i=0; i<columnTitle.length; i++) {
    //     result *= 26;
    //     result += ((columnTitle.charCodeAt(i) - 'A'.charCodeAt(0)) + 1);
    // }

    // return result;
};
console.log(
    titleToNumber("A"),//1
    titleToNumber("AB"),//28
    titleToNumber("ZY"),//701
    titleToNumber("FXSHRXW"),//2147483647
)