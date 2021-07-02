/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let alphebet = generateAlphabets();
    let lowerAlpha = {};
    let array = s.split("");
    let translatedArray = [];
    let indexesArray = array.reduce(function(a, e, i) {
        if (e === '#')
            a.push(i);
        return a;
    }, []);

    for (let i = 0; i < 9; i++) {
        lowerAlpha[i + 1] = alphebet[i];
    }
    for (let i = 9; i < 26; i++) {
        lowerAlpha[i + 1] = alphebet[i];
    }

    array.forEach((num,idx) => {
        if (num[idx + 2] === "#") {
            translatedArray.push(lowerAlpha[array[idx] + array[idx + 1]])
        }
        translatedArray.push(lowerAlpha[num])
    })

    return translatedArray.join("");
};
function generateAlphabets() {
    var alphabets = [];
    var start = 'a'.charCodeAt(0);
    var last  = 'z'.charCodeAt(0);
    for (var i = start; i <= last; ++i) {
      alphabets.push(String.fromCharCode(i));
    }
    return alphabets;
}
console.log(
    // freqAlphabets("10#11#12"),//"jkab"
    freqAlphabets("1326#"),//"acz"
    // freqAlphabets("25#"),//"y"
    // freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"),//"abcdefghijklmnopqrstuvwxyz"
)
// 1309. Decrypt String from Alphabet to Integer Mapping
// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.