/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {


    return haystack.indexOf(needle)
};
console.log(
    strStr("hello","ll"),// 2;
    strStr("aaaaa", "bba"),// -1
    strStr("", ""),// 0
)