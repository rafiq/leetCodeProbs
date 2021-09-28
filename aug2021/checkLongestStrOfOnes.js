/**
 * @param {string} s
 * @return {boolean}
 */
 var checkOnesSegment = function(s, last = '0', cnt = 0) {

    // for (let i = 0; i < s.length; i++) {

    // }
    // return s.match(/["11"]/gi)

    s.split('').forEach(c => { cnt += c == '1' && last == '0', last = c; });
    return cnt == 1;
};
console.log(
    checkOnesSegment("1001"),//false
    checkOnesSegment("110"),//true
)