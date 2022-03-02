/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let reset = numRows;
    let copy = s.slice().split("");
    let i = 0;
    let j = 0;
    let result = new Array(numRows).fill(0).map(el => [])
    // matrix
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < numRows; j++) {
        while ( i !== ### && i !== s.length) {
            j++;
            i--;
            result[j][i] = copy.shift();

            while (i < reset) {
                result[j][i] = copy.shift();
                i++;
            }

        }

    //     }
    // }

    return result
};
console.log(
    convert("PAYPALISHIRING", numRows = 3), //"PAHNAPLSIIGYIR"
    // convert("PAYPALISHIRING", numRows = 4), //""PINALSIGYAHRPI"
);