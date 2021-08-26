/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    if (haystack.includes(needle)) return haystack.indexOf(needle);
    else return -1;
    // for (let i = 0; i < haystack.length; i++) {
    //     if ()
    // }
    // return -1
    // return haystack.indexOf(needle)
};
console.log(
    strStr("hello","ll"),
    strStr("aaaaa",  "bba"),
    strStr("",  ""),
)