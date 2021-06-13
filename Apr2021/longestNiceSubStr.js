/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    let result = "";

    for (let i = 0; i < s.length - 1; i++) {
        let subStr = [s[i]];

        for (let j = i + 1; j < s.length; j++) {
            subStr.push(s[j])
            let isNice = true;

        for (let char of subStr) {
            if (!subStr.includes(char.toLowerCase()) || !subStr.includes(char.toUpperCase())) {
                isNice = false;
            }
        }
        if (isNice && subStr.join("").length > result.length) {
            result = subStr.join("");
        }
        }
    }
    return result;
};
// function isOpposite(char1, char2) {
//     if (char1.toLowerCase() === char1) {
//         return char2 === char1.toUpperCase();
//     } else {
//         return char2 === char1.toLowerCase();
//     }
// }
console.log(
    longestNiceSubstring("YazaAay"),//"aAa"
    longestNiceSubstring("aAbB" ),//"aABb"
    longestNiceSubstring("abA"),//""
    longestNiceSubstring("dDzeE"),//"dD"
    )
    // for (let i = 1; i < s.length; i++) {
    //     if (isOpposite(s[i - 1],s[i])) {
    //         temp += s[i - 1]
    //         temp += s[i];
    //         // i++
    //     } else {
    //         if (result.length < temp.length) {
    //             result = temp;
    //             temp = "";
    //         }
    //     }
    // }