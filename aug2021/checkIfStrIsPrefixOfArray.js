/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    // if (s.length < words[0].length) return false;
    // let testWord = words.reduce((acc,curr) => acc + curr, "")

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] != testWord[i] )return false
    // }
    // return true

    let cur = "";
    for (const w of words) {
        cur += w;
        if (cur === s) return true;
    }
    return false;
};
console.log(
    isPrefixString("iloveleetcode", ["i","love","leetcode","apples"]),
    isPrefixString("iloveleetcode",  ["apples","i","love","leetcode"]),
    isPrefixString("a",
    ["aa","aaaa","banana"]),
    isPrefixString("aaa",
    ["aa","aaa","fjaklfj"]),
)