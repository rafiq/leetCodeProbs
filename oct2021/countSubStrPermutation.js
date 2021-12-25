/**
 * @param {string} s
 * @return {number}
 */
 var countLetters = function(s) {
    // let i = 0,j = 0;
    // let subStrArray = [];
    // let count = 0;

    // while (i < s.length){
    //     if (s[j] !== s[i]) {
    //         subStrArray.push(s.slice(i,j));
    //         i = j;
    //     }
    //     if (s[i] === s[j]) {
    //         j++;
    //     }
    // }
    // let result = [];
    // for (let str of subStrArray) {

    //     if (str.length === 1) {
    //         result.push(str);
    //         continue;
    //     }
    //     for (let i = 0; i < str.length; i++) {
    //         // for (let j = i + 1; j < str.length ; j++) {
    //             result.push(str.slice(0,i + 1))
    //         // }
    //     }
    // }

    // result = result.filter(str => {
    //     return result.indexOf(str) === result.lastIndexOf(str);
    // })
    // // result.forEach(el => {

    // // })
    // return s.match(/aa/gi);
    var currLength = 1;
    var res = 1;

    for(var i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currLength++;
        } else {
            currLength = 1;
        }
        res += currLength;
    }

    return res;
};
console.log(
    countLetters("aaaba"),//8
);