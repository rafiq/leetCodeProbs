/**
 * @param {number} columnNumber
 * @return {string}
 * A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28

so return the appropriate string according to the number given
cycles of 26
ten  base but up to 26 count

 */
 var convertToTitle = function(columnNumber) {
    // const ALPHA = "_abcdefghijklmnopqrstuvwxyz".toUpperCase();
    // let result = "";
    // if (columnNumber <= 26) {
    //     result += ALPHA[columnNumber]
    //     // console.log(result);
    //     return result;
    //     // console.log(result);
    // }
    // let wholeNum = Math.floor(columnNumber / 26);
    // let remainder = (columnNumber % 26);

    // while (wholeNum > 26) {
    //     result += ALPHA[26];
    //     wholeNum -= 26;
    // }
    // result += ALPHA[wholeNum]
    // result += ALPHA[remainder];

    // return result
    // let roundQuotient= 0;
    // let result =""
    // while (columnNumber){
    //     result = String.fromCharCode(((columnNumber-1)%26)+97) + result
    //     columnNumber = Math.floor((columnNumber-1)/26);
    //     console.log("result in loop", result, "column#", columnNumber)
    // }
    // console.log("final",result)
    // return result.toUpperCase()
    let newStr = "";
    while(columnNumber > 0){
        columnNumber--;
        let charCode = String.fromCharCode((columnNumber % 26) + 65);
        newStr = charCode + newStr;
        columnNumber = Math.floor(columnNumber/ 26);
    }

    return newStr;
};
console.log(
    convertToTitle(1),//
    convertToTitle(28),//
    convertToTitle(701),//
    convertToTitle( 2147483647),//
)