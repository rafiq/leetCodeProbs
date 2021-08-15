/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    // let largest = 0

    // for (let i = 0; i < num.length; i++) {
    //     for (let j = i + 1; j < num.length + 1; j++) {
    //         let temp =  +num.slice(i,j)
    //         console.log(temp)
    //         if (temp % 2 === 1)  {
    //             if (temp > largest) {
    //                 largest = temp
    //             }
    //         }
    //     }
    // }

    // return !largest ? "" : largest.toString()
    let i = num.length - 1;
    while (i >= 0 && parseInt(num[i]) % 2 === 0) i--;
    return num.substr(0, i + 1);
};
console.log(
    // largestOddNumber("52"),
    // largestOddNumber("4206"),
    // largestOddNumber( "35427"),
    largestOddNumber( "239537672423884969653287101"),//"239537672423884969653287101"
)